import { Injectable } from '@angular/core';
import products from '../products';
import { IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shoppingCart: IProduct[];
  products: IProduct[];

  constructor() { 
    this.products = products;
  }

  getProducts(): IProduct[]{
    return this.products;
  }
  getShoppingCart(): IProduct[]{

    return this.shoppingCart;
  }
  addToCart(Product: IProduct){
    this.shoppingCart.push(Product);
  }
}
