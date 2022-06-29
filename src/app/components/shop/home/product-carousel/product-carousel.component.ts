import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import {  SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../../products/product-dialog/product-dialog.component';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { WishlistService } from 'src/app/components/shared/services/wishlist.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.sass']
})
export class ProductCarouselComponent implements OnInit {
  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
  @Input('product') product: Array<Product> = [];
  public config: SwiperConfigInterface = {};
  constructor(private dialog: MatDialog, private router: Router, private cartService: CartService, private productService: ProductService, private wishlistService: WishlistService) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 5,
      spaceBetween: 16,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        740: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },


      }
    }
  }


  public openProductDialog(product){
    let dialogRef = this.dialog.open(ProductDialogComponent, {
        data: product,
        panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if(product){
        this.router.navigate(['/products', product.id, product.name]);
      }
    });
  }

   // Add to cart
   public addToCart(product: Product,  quantity: number = 1) {
    this.cartService.addToCart(product,quantity);
    console.log(product, quantity);
  }

   // Add to wishlist
   public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
 }

    // Add to compare
    public addToCompare(product: Product) {
      this.productService.addToCompare(product);
   }
}
