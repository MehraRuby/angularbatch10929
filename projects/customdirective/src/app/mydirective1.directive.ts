import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective1]',
  standalone: true
})
export class Mydirective1Directive
{

  //ElementRef represents the html tag to which we are using this directive
  constructor(private em:ElementRef)
  {
    em.nativeElement.style.background="blue";
    em.nativeElement.style.color="white";
    em.nativeElement.style.border="2px solid red";

  }



}
