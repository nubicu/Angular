import { Component, Input, OnInit } from '@angular/core';
import { CoinInfo } from './../../models/CoinsInfo';
import { SharedDataService } from './../../services/shared-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input() coins: CoinInfo[] = [];

  favorites: CoinInfo[] = [];
  
  favoriteIds: string[] = [
    "chiliz", "dogecoin", "shiba-inu", "cardano"
  ];

  myCoins: {[key: string]: number} = {
    "chiliz": 104,
    "dogecoin": 687,
    "shiba-inu": 1810000,
    "cardano": 34
  }

  constructor(private sharedData: SharedDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.setFavorites();
  }

  setFavorites() {
    this.sharedData.getCoin().subscribe( coinId => {
      this.favorites = this.coins.filter((coin: CoinInfo) => coin.id === coinId);
      this.favorites.forEach((favorite) => {
        favorite.my_currency = this.myCoins[favorite.id] * favorite.current_price;
      })
    })
  }
}
