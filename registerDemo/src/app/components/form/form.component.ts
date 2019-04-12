import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public  peopleInfo = {
    username: '123',
    sex: '1',
    citylist: [ '北京', '上海', '深圳'],
    city: '北京',
    hobby: [{
      title: '吃饭',
      checked: false
    },{
      title: '睡觉',
      checked: false
    },{
      title: '聊天',
      checked: false
    }]
  };
  constructor() { }

  ngOnInit() {
  }
  getInfo() {
    console.log(this.peopleInfo);
  }
}
