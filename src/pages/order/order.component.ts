import {Component, ViewChild, OnInit} from "@angular/core";
import {Content, NavController, MenuController, LoadingController, Refresher} from "ionic-angular";
import {AboutComponent} from "../about/index";
import {PizzaService} from "../../providers/pizza.service";
import {Pizza} from "../../models/pizza.model";
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../../providers/cart.service";
import {DetailComponent} from "../detail/detail.component";

@Component({
  templateUrl: 'order.component.html'
})

export class OrderComponent implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild(Refresher) refreshCtrl: Refresher;
  private pizzas: Pizza[] = [];

  constructor(
    private nav: NavController,
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let loader = this.presentLoader('Lade Pizzaangebot.');
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      loader.dismiss();
    });
  }

  scrollToBottom() {
    let loader = this.presentLoader('Lade. Sei nicht so ungeduldig!');

    setTimeout(() => {
      this.content.scrollToBottom();
      loader.dismiss();
      }, 2000);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  openAbout() {
    this.nav.push(AboutComponent);
  }

  openDetailPage(pizzaId: number) {
    this.nav.push(DetailComponent, { id: pizzaId });
  }

  openCart() {
    this.nav.push(CartComponent);
  }

  addToCart(pizza: Pizza) {
    this.cartService.addToCart(pizza);
  }

  doRefresh(refresher: Refresher) {
    const subscription = this.pizzaService.getPizzas().subscribe(
      pizzas => {
        this.pizzas = pizzas;
        refresher.complete();
        subscription.unsubscribe();
      }
    );
  }

  presentLoader(customMsg: string) {
    let loader = this.loadingCtrl.create({
      content: customMsg
    });
    loader.present();
    return loader;
  }

}
