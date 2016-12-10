import {Component, OnInit} from "@angular/core";
import {CartItem} from "../../models/cart-item.model";
import {AlertController} from "ionic-angular";
import {CartService} from "../../providers/cart.service";

@Component({
  templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {

  private cart: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController
  ) {

  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  ionViewDidEnter() {
    if(this.cart.length) {
      return;
    }

    let alert = this.alertCtrl.create({
      title: '<b>Dein Warenkorb ist leer</b>.',
      subTitle: 'Füge erst Produkte aus unserem Angebot hinzu.',
      buttons: ['Jaja']});
    alert.present();
    }

  calcTotalSum() {
    return this.cartService.calcTotalSum();
  }

  removeFromCart(index: number) {
    this.cartService.removeCartItem(index);
  }

}
