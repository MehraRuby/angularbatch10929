import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddproductComponent } from "./addproductchildcomp/addproduct/addproduct.component";
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddproductComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'outputdecorator';

  prdt=[]
i:number=0;

getValue(val : any)
{
this.prdt.push(val)
console.log(this.prdt);
}

remove(id:any)
{
  for(var x of this.prdt)
    {
      if(x === id)
        {
          this.prdt.splice(this.i,1);
          break;
       }
       this.i++;
}

}



getColor(id:any)
{
  if(id>4)
    return "#55eeff";
  else
    return "#33eeaa";
}




}
