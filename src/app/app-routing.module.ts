import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllDealsComponent} from "./deal/components/all-deals/all-deals.component";

const routes: Routes = [
  { path: 'deals', component: AllDealsComponent },
  { path: 'stores', component: AllDealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
