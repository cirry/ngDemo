import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public list: any[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.list[i] = '我是第' + i + '个新闻';
    }
  }

}
