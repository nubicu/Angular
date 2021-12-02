import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinInfo } from '../models/CoinsInfo';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public coin$ = new BehaviorSubject<string>(undefined);

  constructor() { }

  public getCoin(): Observable<string> {
    return this.coin$.asObservable();
  }
}
