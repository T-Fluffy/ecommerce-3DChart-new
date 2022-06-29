import { Injectable } from '@angular/core';
import { Product } from '../../../modals/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscriber} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("wishlistItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  // wishlist array
  public wishlistProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public observer   :  Subscriber<{}>;

  constructor(public snackBar: MatSnackBar) { }

    // Get  wishlist Products
    public getProducts(): Observable<Product[]> {
      const itemsStream = new Observable(observer => {
        observer.next(products);
        observer.complete();
      });
      return <Observable<Product[]>>itemsStream;
    }


   // If item is aleready added In wishlist
 public hasProduct(product: Product): boolean {
  const item = products.find(item => item.id === product.id);
  return item !== undefined;
}

   // Add to wishlist
   public addToWishlist(product: Product): Product | boolean {
    let message, status;
    var item: Product | boolean = false;
    if (this.hasProduct(product)) {
      item = products.filter(item => item.id === product.id)[0];
      const index = products.indexOf(item);
    } else {
      products.push(product);
    }
    message = 'The product ' + product.name + ' has been added to wishlist.';
            status = 'success';
            this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
      localStorage.setItem("wishlistItem", JSON.stringify(products));
      return item;
  }


  // Removed Product
  public removeFromWishlist(product: Product) {
    if (product === undefined) { return; }
    const index = products.indexOf(product);
    products.splice(index, 1);
    localStorage.setItem("wishlistItem", JSON.stringify(products));
  }
}
