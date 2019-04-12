import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private logger: LoggerService) {
  }
  getProduct() {
    this.logger.log('getProduct方法被调用');
    return new Product(0, 'iphonexr', 5000, '最新款苹果手机');
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}
