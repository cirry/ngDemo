import { FormControl , FormGroup} from '@angular/forms';
export function mobileVaildtor(control: FormControl): any {
  const myreg = /^((13[0-9]{1}|15[0-9]{1}|18[0-9]{1})+\d{8})$/;
  let vaild = myreg.test(control.value);
  console.log('mobile的校验结果是：' + vaild);
  return vaild ? null : {mobile: true};
}

// export function mobileAsyncVaildtor(control: FormControl): any {
//   const myreg = /^((13[0-9]{1}|15[0-9]{1}|18[0-9]{1})+\d{8})$/;
//   let valid = myreg.test(control.value);
//   console.log('mobile的校验结果是：' + valid);
//   return Observable.of( valid ? null : {mobile: true}).delay(5000);
// }

export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let valid:boolean = (password.value == pconfirm.value);
  console.log('密码校验结果是：' + valid);
  return valid ? null : { equal : {desc: '密码和确认密码不匹配'}};
}
