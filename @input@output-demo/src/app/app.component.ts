import { Component } from '@angular/core';
import {PriceQuote} from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stock = '';
  priceQuote: PriceQuote = new PriceQuote('', 0);
  buyHander(event: PriceQuote) {
  this.priceQuote = event;
  }
}
