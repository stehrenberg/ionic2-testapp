import {Component} from "@angular/core";
import {Pizza} from "../../models/pizza.model";
import {PizzaService} from "../../providers/pizza.service";
import {NavParams, LoadingController} from "ionic-angular";

@Component({
  templateUrl: 'detail.component.html'
})

export class DetailComponent {

  private pizza: Pizza;

  constructor(
    private params: NavParams,
    private pizzaService: PizzaService,
    private loader: LoadingController
  ) {}

  ionViewWillEnter() {
    this.loadPizzaInformation();
  }

  loadPizzaInformation() {
    let pizzaId = this.params.get('id');
    let loader = this.generateLoader();
    const subscription = this.pizzaService
      .getPizzabyId(pizzaId)
      .subscribe(pizza => {
        this.pizza = pizza;
        subscription.unsubscribe();
        loader.dismiss();
      });
  }

  generateLoader() {
    let loader = this.loader.create({
      content: 'Informationen zu deiner Pizza werden geladen.'
    });
    loader.present();
    return loader;
  }
}
