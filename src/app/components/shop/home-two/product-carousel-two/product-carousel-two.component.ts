import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { WishlistService } from 'src/app/components/shared/services/wishlist.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../../products/product-dialog/product-dialog.component';
import {  SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-product-carousel-two',
  templateUrl: './product-carousel-two.component.html',
  styleUrls: ['./product-carousel-two.component.sass']
})
export class ProductCarouselTwoComponent implements OnInit {
  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
  @Input('product') product: Array<Product> = [];
  public config: SwiperConfigInterface = {};

   constructor(private cartService: CartService, private productsService: ProductService, private wishlistService: WishlistService, private dialog: MatDialog, private router: Router) { }
  //  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

   ngOnInit() {
     console.log(this.product);
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
       loop: false,
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
     this.productsService.addToCompare(product);
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
}
