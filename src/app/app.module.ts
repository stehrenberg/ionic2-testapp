import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {PizzaAppComponent} from "./app.component";
import {OrderComponent} from "../pages/order/order.component";
import {AboutComponent} from "../pages/about/about.component";
import {CartComponent} from "../pages/cart/cart.component";
import {PizzaService} from "../providers/pizza.service";
import {CartService} from "../providers/cart.service";
import {DetailComponent} from "../pages/detail/detail.component";

@NgModule({
  declarations: [
    OrderComponent,
    PizzaAppComponent,
    AboutComponent,
    CartComponent,
    DetailComponent
  ],
  imports: [
    IonicModule.forRoot(PizzaAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    OrderComponent,
    AboutComponent,
    CartComponent,
    DetailComponent
  ],
  providers: [PizzaService, CartService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
