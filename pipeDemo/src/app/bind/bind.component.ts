import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  public brithday: Date = new Date();
  public pi: number = 3.1415926;
  public size: number = 7;
  constructor() {

  }

  ngOnInit() {}
}
