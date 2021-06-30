import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DealFacadeService} from "./deal/services/deal-facade.service";
import {StoreFacadeService} from "./store/services/store-facade.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

}
