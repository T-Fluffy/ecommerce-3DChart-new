import { Product } from './product.model';

// cart items
export interface CartItem {
  product: Product;
  quantity: number;
}
