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
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatTooltipModule,NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent
{


  public ctgy:Category[] |any

  val:number=0

  public prdt:Product[] |any


p: number = 1;
count: number = 8;


ngOnInit()  // get called only once
{
  this.getallvalues()
}

  constructor(private myserv: MyserviceService)
  {  }

  getallvalues()
  {
    this.myserv.getallcategory().subscribe(
                        resp=>{

                                  this.ctgy=resp;

                              },
                              error=>console.log(error)
                         )

        this.myserv.getallproducts().subscribe(
                          resp=>{

                                    this.prdt=resp;
                                    this.myserv.allprdt = resp;

                                },
                                error=>console.log(error)
                           )



  }

  ngDoCheck()
  {
   //console.log("do check")
   this.prdt = this.myserv.allprdt.filter(m=>m.ct.catid == this.val);
   //console.log(this.prdt)
   if(this.prdt.length == 0)
      this.prdt = this.myserv.allprdt

  }

getcatid(id:any)
{
  this.val = id;

}


allcatid(){this.val=0}


addtolocalstorage(a?:any)
{
  var result = confirm (" Item is added in a Cart ! ")
  if(result == true)
  {
    sessionStorage.setItem(a.prnm,JSON.stringify(a));
  }
}

  }






