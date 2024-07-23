import { Directive , HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicdirective]',
  standalone: true
})
export class DynamicdirectiveDirective
{

  constructor() { }

    //Dynamic style
// HostListener is used for events
// HostBinding is used for properties or styles declaration

@HostBinding("style.color") colorKey="yellow";
@HostBinding("style.backgroundColor") bgcolor="blue";

@HostListener("mouseenter") onEnter()
{
  this.colorKey="blue";
  this.bgcolor="yellow";
}

@HostListener("mouseleave") onLeave()
{
  this.colorKey="red";
  this.bgcolor="lightblue";
}

}
