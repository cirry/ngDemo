import { Directive } from '@angular/core';
import {mobileVaildtor} from './validator/validators';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileVaildtor, multi: true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
