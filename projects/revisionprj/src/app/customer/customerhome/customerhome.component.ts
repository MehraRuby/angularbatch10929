import { Component } from '@angular/core';
import { Category } from '../../models/Category';
import { MyserviceService } from '../../service/myservice.service';
import { CommonModule } from '@angular/common';
import { CartcompComponent } from "../../cart/cartcomp/cartcomp.component";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-customerhome',
  standalone: true,
  imports: [CommonModule, CartcompComponent,NgxPaginationModule],
  templateUrl: './customerhome.component.html',
  styleUrl: './customerhome.component.css'
})
export class CustomerhomeComponent {

constructor(private myserv:MyserviceService){}

  catobj:Category[]=[];
  prdt:any
cart=[]
tot=0
p=1;
count=5;

ngOnInit(){
  this.myserv.getallproducts().subscribe(response=>
    {this.prdt = response
    console.log(this.prdt)
    },
    error=>console.log(error)
    )

    this.myserv.getallcategory().subscribe(response=>
      { this.catobj = response
     console.log(this.catobj)
     },
       error=>console.log(error)
       )

}

passid(a:any)
{
console.log(a)
this.cart.push(a);
this.tot=this.tot+a.price
}

delproduct(a)
{
  this.tot = this.tot-a.price;
  this.cart.splice(this.cart.indexOf(a),1)
}

}
