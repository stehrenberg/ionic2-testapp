import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {PizzaAppComponent} from "./app.component";
import {OrderComponent} from "../pages/order/order.component";
import {AboutComponent} from "../pages/about/about.component";

@NgModule({
  declarations: [
    OrderComponent,
    PizzaAppComponent,
    AboutComponent
  ],
  imports: [
    IonicModule.forRoot(PizzaAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    OrderComponent,
    AboutComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
