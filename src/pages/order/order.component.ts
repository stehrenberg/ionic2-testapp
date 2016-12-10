import {Component, ViewChild} from "@angular/core";
import {Content, NavController} from "ionic-angular";
import {AboutComponent} from "../about/index";

@Component({
  templateUrl: 'order.component.html'
})

export class OrderComponent {

  @ViewChild(Content) content: Content;
  aboutComponent = AboutComponent;

  constructor(private nav: NavController) {
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  openAbout() {
    this.nav.push(AboutComponent);
  }

}
