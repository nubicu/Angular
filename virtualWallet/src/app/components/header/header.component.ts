import { Component, Input, OnInit } from '@angular/core';
import { CoinInfo } from 'src/app/models/CoinsInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() coins: CoinInfo[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
