import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AntherProductService implements ProductService {

  constructor(public  logger: LoggerService) { }

  getProduct(): Product {
    return new Product(1, 'samsung', 4899, '最新款三星手机');
  }
}
