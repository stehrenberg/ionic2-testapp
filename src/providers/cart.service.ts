import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CartItem} from "../models/cart-item.model";
import {Pizza} from "../models/pizza.model";

@Injectable()
export class CartService {

  private cart: CartItem[] = [];

  constructor(private http: Http) {
  }

  getCart() {
    return this.cart;
  }

  addToCart(pizza: Pizza) {
    this.cart.push({
      name: pizza.name,
      price: pizza.price
    });

  }

  removeCartItem(index: number) {
    //[].splice(index, howmany, [newItem])
    this.cart.splice(index, 1);
  }

  calcTotalSum() {

  }

}
