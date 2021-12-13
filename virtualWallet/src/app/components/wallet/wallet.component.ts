import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinInfo } from 'src/app/models/CoinsInfo';
import { CoinsService } from 'src/app/services/coins.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public coinId: string[];
  public status: number;
  public budget: number;
  public coins$: Observable<CoinInfo[]>;
  public selectedCoin: number = 0;
  public totalCost: number = 0;
  public overPrice: boolean = false;
  public amount: any;
  
  constructor(private sharedData: SharedDataService, private coinService: CoinsService) { }

  ngOnInit(): void {
    this.sharedData.getCoin().subscribe(ids => {
      this.coinId = ids;
    })
    this.sharedData.getBudget().subscribe((currentBudget) => {
      this.status = currentBudget;
      this.budget = currentBudget;
    });
    this.coins$ = this.coinService.getCoins();
  }

  calculateTotalPrice(evt: any) {
    this.amount = +evt.value;
    this.totalCost = this.selectedCoin * +this.amount;
    this.overPrice = this.totalCost > this.budget;
  }

  resetValues() {
    this.totalCost = 0;
    this.overPrice = false;
    this.amount = '';
  }

}
