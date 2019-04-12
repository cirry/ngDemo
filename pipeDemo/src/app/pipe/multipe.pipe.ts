import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipe'
})
export class MultipePipe implements PipeTransform {

  transform(value: number, args?: number): any {
    if(!args) {
      args = 1;
    }
    return value * args;
  }

}
