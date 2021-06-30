import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {DealFacadeService} from "../../services/deal-facade.service";
import {IDeal} from "../../state/models/deal.model";
import {IDealDetail} from "../../state/models/deal-detail.model";
import {ID} from "@datorama/akita";

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.scss']
})
export class DealDetailComponent implements OnInit {
  dealID: string | null = null;
  title: string | undefined;
  deal: IDealDetail | undefined;

  constructor (
    private route: ActivatedRoute,
    private facadeService: DealFacadeService
  ) { }

  async ngOnInit() {
    this.dealID = this.route.snapshot.params.id;
    this.title = this.route.snapshot.params.title;
    await this.fetchDealDetail();
  }

  async fetchDealDetail() {
    if (!this.dealID) {
      return;
    }
    this.deal = await this.facadeService.getDealByID(this.dealID);
  }

  async viewDeal(id: string) {
    this.dealID = id;
    this.deal = undefined;
    await this.fetchDealDetail();
  }

}
