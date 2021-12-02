import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CoinInfo } from '../models/CoinsInfo';

@Injectable({
  providedIn: 'root'
})

export class CoinsService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<CoinInfo[]> {
    return this.http.get<CoinInfo[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  }
}
