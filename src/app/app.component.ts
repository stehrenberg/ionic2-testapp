import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {OrderComponent} from "../pages/order/order.component";
import {Nav, App} from "ionic-angular";

@Component({
  templateUrl: 'app.html'
})

export class PizzaAppComponent {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = OrderComponent;

  constructor(private app: App) {
  }
}
