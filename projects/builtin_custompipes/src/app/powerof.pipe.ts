import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerof',
  standalone: true
})
export class PowerofPipe implements PipeTransform {

  transform(value:number,z:number): number
  {
    return Math.pow(value,z);
  }

}
