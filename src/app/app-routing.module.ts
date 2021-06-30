import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllDealsComponent} from "./deal/components/all-deals/all-deals.component";
import {DealDetailComponent} from "./deal/components/deal-detail/deal-detail.component";

const routes: Routes = [
  { path: '',   redirectTo: '/deals', pathMatch: 'full' },
  { path: 'deals', component: AllDealsComponent },
  { path: 'stores', component: AllDealsComponent },
  { path: 'deal/:id/:title', component: DealDetailComponent },
  { path: '**', redirectTo: '/deals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
