import { Component } from '@angular/core';

import { MyserviceService } from '../myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Category } from '../../models/Category';


declare var Razorpay: new (arg0: any) => any



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatTooltipModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent
{

  obj={};
  tot=0;
  options?:any
  cart=[]
  msg=" Your Cart "

  constructor(private myserv: MyserviceService)
  {
  if(sessionStorage.length==0)
  {
      this.msg="Your cart is Empty ! "
  }
  else{
  for (var i = 0; i < sessionStorage.length; ++i)
    {
      var key = sessionStorage.key(i);
      var val = sessionStorage.getItem(key);

  this.obj=JSON.parse(val)
  this.tot += this.obj["price"]
      this.cart.push(this.obj);
  }}

  }


  ngDoCheck()
  {
    if(sessionStorage.length==0)
      this.msg=" Select Items !"


  }



  orderitems()
  {

    if(sessionStorage.length==0)
    {
      alert("Your Cart is Empty !")
    }
    else{







    let result = window.confirm("Do you really want to confirm the order :");
    if(result)
      {

      this.myserv.createTransaction(this.tot).subscribe(
        res => { console.log(res);
        this.openTransactionModal(res);
        },
        err=>
        {
          alert(" Error in confirming the order ! ");
        console.log(err); })
      }
  else {
        alert("Order is not confirm");
        }
        sessionStorage.clear();
      }
  }

  openTransactionModal(response:any)
  {
  this.options={
  order_id: response.orderId,
  key:response.key,
  amount:response.amount,
  currency:response.currency,
  name:'Ruby Mehra',
  description:'Payment gateway check',
  image:'https://cdn.pixabay.com/photo/2023/05/28/03/34/flowers8022731_640.jpg',
  handler: (response:any) =>{
  this.processResponse(response);
  },
  prefill:{
  name:'Ruby Mehra',
  email:'rubymehra.jr@gmail.com',
  contact:'9717282444',
  },
  notes:{
  address:'Online Shopping'
  },
  theme:{
  color:'#F37254'
  }
  };

console.log(this.options);
  const rzp = new Razorpay(this.options);
  rzp.open();
}



  processResponse(resp:any)
  {
  console.log(resp);
  }




  deletecart(a?:any)
  {
  let obj={}
  this.tot=0;
    let index = this.cart.indexOf(a);

    this.cart.splice(index, 1);
    //first delete existing list
    sessionStorage.removeItem(a.prnm);

    for (var i = 0; i < sessionStorage.length; ++i) {
      var key = sessionStorage.key(i);
      var value = sessionStorage.getItem(key);
      obj=JSON.parse(value)
      this.tot += obj["price"]
      }
  }


}
