import {Component, ViewChild, OnInit} from "@angular/core";
import {Content, NavController, MenuController, LoadingController} from "ionic-angular";
import {AboutComponent} from "../about/index";
import {PizzaService} from "../../providers/pizza.service";
import {Pizza} from "../../models/pizza.model";

@Component({
  templateUrl: 'order.component.html'
})

export class OrderComponent implements OnInit {

  @ViewChild(Content) content: Content;
  aboutComponent = AboutComponent;
  pizzas: Pizza[] = [];

  constructor(
    private nav: NavController,
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private pizzaService: PizzaService) {

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

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Lade. Sei nicht so ungeduldig!",
      duration: 2000
    });
    loader.present();
  }

}
