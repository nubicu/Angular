import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public coinId: string;
  
  constructor(private sharedData: SharedDataService) { }

  ngOnInit(): void {
    this.sharedData.getCoin().subscribe(ids => {
      this.coinId = ids;
    })
  }

}
