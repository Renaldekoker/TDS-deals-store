import {Component, Input, OnInit} from '@angular/core';
import {IDeal} from "../../state/deal.model";

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  @Input()
  deal: IDeal | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
