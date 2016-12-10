import {Component, ViewChild, OnInit} from "@angular/core";
import {Content, NavController, MenuController, LoadingController} from "ionic-angular";
import {AboutComponent} from "../about/index";
import {PizzaService} from "../../providers/pizza.service";
import {Pizza} from "../../models/pizza.model";
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../../providers/cart.service";

@Component({
  templateUrl: 'order.component.html'
})

export class OrderComponent implements OnInit {

  @ViewChild(Content) content: Content;
  private aboutComponent = AboutComponent;
  private pizzas: Pizza[] = [];

  constructor(
    private nav: NavController,
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {
    menuCtrl = menuCtrl;
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
      }, 2000);
    this.presentLoading();
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  openAbout() {
    this.nav.push(AboutComponent);
  }

  openCart() {
    this.nav.push(CartComponent);
  }

  addToCart(pizza: Pizza) {
    this.cartService.addToCart(pizza);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Lade. Sei nicht so ungeduldig!",
      duration: 2000
    });
    loader.present();
  }

}
