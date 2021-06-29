import {Component, Input, OnInit} from '@angular/core';
import {IDeal} from "../../state/deal.model";
import {ID} from "@datorama/akita";
import {Router} from "@angular/router";

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  @Input()
  deal: IDeal | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewDeal(id: ID): void {
    this.router.navigate(['deal', id]);
  }

}
