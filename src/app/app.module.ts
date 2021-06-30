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
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DealDetailComponent } from './deal/components/deal-detail/deal-detail.component';
import {IStoresApiService} from "./store/services/i-stores-api.service";
import {StoresApiService} from "./store/services/stores-api.service";
import { AllStoresComponent } from './store/components/all-stores/all-stores.component';
import { StoreComponent } from './store/components/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDealsComponent,
    TopNavComponent,
    DealComponent,
    BottomNavComponent,
    DealDetailComponent,
    AllStoresComponent,
    StoreComponent
  ],
  imports: [
    AkitaNgDevtools.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: IDealsApiService, useClass: /*environment.production ?*/ DealsApiService /*: MockDealsApiService*/ },
    { provide: IStoresApiService, useClass: StoresApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
