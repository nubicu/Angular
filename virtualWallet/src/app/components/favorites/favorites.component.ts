import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input() coins: any;

  favorites: Array<any> = [];
  
  favoriteIds = [
    "chiliz", "dogecoin", "shiba-inu", "cardano"
  ];

  myCoins: any = {
    "chiliz": 104,
    "dogecoin": 687,
    "shiba-inu": 1810000,
    "cardano": 34
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.setFavorites();
  }

  setFavorites() {
    this.favorites = this.coins.filter(
      (coin: any) =>
        this.favoriteIds.includes(coin.id)
    );
    this.favorites.forEach((favorite) => {
      favorite.my_currency = this.myCoins[favorite.id] * favorite.current_price;
    })
  }
}
