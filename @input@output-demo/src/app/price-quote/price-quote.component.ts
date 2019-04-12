import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.scss']
})
export class PriceQuoteComponent implements OnInit {
  stockCode: string = 'IBM';
  price: number ;

  // @ts-ignore
  @Output()
  lastprice: EventEmitter<PriceQuoter> = new EventEmitter();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();
  constructor() {
    setInterval(() => {
      const priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      this.lastprice.emit(priceQuote);
    }, 1000);
  }

  buyStock() {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }
  ngOnInit() {
  }

}

export  class PriceQuote {
  constructor(
    public stockCode: string,
    public lastPrice: number
  ) {}
}
