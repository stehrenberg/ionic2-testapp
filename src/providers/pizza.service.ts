import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Pizza} from "../models/pizza.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class PizzaService {

  constructor(private http: Http) {

  }

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get('assets/pizza.json')
      .delay(2000)
      .map((res: Response) => res.json());
  }

  getPizzabyId(id): Observable<Pizza> {
    return this.http
      .get('assets/pizza.json')
      .map((res: Response) => res.json())
      .map((pizzas: Pizza[]) => {
        for (let pizza of pizzas) {
          if (pizza.id == id) {
            return pizza;
          }
        }
      });
  }
}
