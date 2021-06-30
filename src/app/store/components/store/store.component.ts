import {Component, Input, OnInit} from '@angular/core';
import {IStore} from "../../state/models/store.model";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @Input()
  store: IStore | undefined;

  @Input()
  numDeals: number | undefined

  constructor(

  ) { }

  ngOnInit(): void {
  }
}
