import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-product-vertical',
  templateUrl: './product-vertical.component.html',
  styleUrls: ['./product-vertical.component.sass']
})
export class ProductVerticalComponent implements OnInit {

 @Input() products: Product[];

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe (
    product => this.products = product
    )
  }

}
