import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import {equalValidator, mobileVaildtor, mobileAsyncVaildtor} from '../validator/validators';
@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.scss']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;

  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl,
  //     mobile: new FormControl,
  //     passwordGroup: new FormGroup({
  //       password: new FormControl,
  //       pconfirm: new FormControl
  //     })
  //   });
  // }
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileVaildtor, mobileAsyncVaildtor],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, { validator: equalValidator})
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
    // const isVaild: boolean = this.formModel.get('username').valid;
    // console.log('校验结果是：' + isVaild);
    // const errors:any = this.formModel.get('username').errors;
    // console.log('username的错误信息是'+ JSON.stringify(errors));
  }
}
