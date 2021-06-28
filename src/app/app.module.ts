import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IDealsApiService} from "./deal/services/i-deals-api.service";
import {environment} from "../environments/environment";
import {DealsApiService} from "./deal/services/deals-api.service";
import {MockDealsApiService} from "./deal/services/mock-deals-api.service";
import {AllDealsComponent} from "./deal/components/all-deals/all-deals.component";
import { TopNavComponent } from './common/components/top-nav/top-nav.component';
import { DealComponent } from './deal/components/deal/deal.component';
import { BottomNavComponent } from './common/components/bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDealsComponent,
    TopNavComponent,
    DealComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: IDealsApiService, useClass: environment.production ? DealsApiService : MockDealsApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
