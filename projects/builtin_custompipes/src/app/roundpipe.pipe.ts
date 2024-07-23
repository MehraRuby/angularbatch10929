import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundpipe',
  standalone: true
})
export class RoundpipePipe implements PipeTransform
 {

  transform(value:string, z:boolean=false): string
  {
    if(value=='')
      return 'blank';
    else{
        if(z)
          return "[***"+value+"***]";
        else
          return "($$$"+value+"$$$)";
    }



    return null;
  }

}
