import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  dataResource: Observable<any>;
  products: Array<any> = [];

  constructor(private http: HttpClient) {
    this.dataResource = this.http.get('/api/products');
  }

  ngOnInit() {
    this.dataResource.subscribe(
      (data) => this.products = data );
  }

}
