import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CoinInfo } from './../models/CoinsInfo';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public coin$ = new BehaviorSubject<string>(undefined);

  public selectedCoin$ = new Subject<string>();

  constructor() { }

  public getCoin(): Observable<string> {
    return this.coin$.asObservable();
  }

  public getSelectedCoin(): Observable<string> {
    return this.selectedCoin$.asObservable();
  }
}
