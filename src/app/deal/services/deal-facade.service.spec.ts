import { TestBed } from '@angular/core/testing';
import { DealStore } from '../state/deal.store';
import { IDealsApiService } from './i-deals-api.service';
import { DealQuery } from '../state/deal.query';
import { DealFacadeService } from './deal-facade.service';
import {MockDealsApiService} from "./mock-deals-api.service";
import {IStoresApiService} from "../../store/services/i-stores-api.service";

describe('DealFacadeService', () => {
  let service: DealFacadeService;
  let query: DealQuery;
  let store: DealStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DealFacadeService,
        {provide: IDealsApiService, useClass: MockDealsApiService},
        DealStore,
        DealQuery,
        IStoresApiService
      ]
    });
    service = TestBed.inject(DealFacadeService);
    query = TestBed.inject(DealQuery);
    store = TestBed.inject(DealStore);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should only fetch deals on sale', async() => {
   await service.fetchDeals(true);
    const sub = service.allDeals$.subscribe(
      deals => {
        // console.log(JSON.stringify(deals, null, 2))
        expect(deals.map(d => d.isOnSale).indexOf(false) == -1).toBeTruthy()
        expect(deals.length).toBeGreaterThan(0);
      }
    )
    sub.unsubscribe();
  });

  it('should only fetch deals not on sale', async() => {
    await service.fetchDeals(false);
    const sub = service.allDeals$.subscribe(
      deals => {
        // console.log(JSON.stringify(deals, null, 2))
        expect(deals.map(d => d.isOnSale).indexOf(true) == -1).toBeTruthy()
        expect(deals.length).toBeGreaterThan(0);
      }
    )
    sub.unsubscribe();
  });
});
