import { Component, ElementRef, ViewChild,Input } from '@angular/core';
import { response } from 'express';
import { Product } from '../../models/Product';
import { MyserviceService } from '../myservice.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-listproductpg',
  templateUrl: './listproductpg.component.html',
  styleUrl: './listproductpg.component.css',
  standalone: true,
  imports: [NgxPaginationModule,MatToolbarModule,FormsModule,MatTooltipModule],


})
export class ListproductpgComponent {

@Input() prdt:any


prnm:string='';
price:number=0;
qty:number=0;

p: number = 1;
count: number = 5;

updaterec:Product | any


constructor(private myserv:MyserviceService)
{


}


@ViewChild("mod_2",{static:false}) mod_2?:ElementRef;

updateclose()
  {
    (this.mod_2?.nativeElement as HTMLElement).style.display="none"
     document.body.classList.remove('model-open');
  }

updatesave()
{
  var result = window.confirm("Do you want to update the record: ");
  if(result)
  {
    this.updaterec.price=this.price;
    this.updaterec.qty=this.qty;
    this.myserv.updateproduct(this.updaterec).subscribe(res=>console.log(res),error=>console.log(error));
  }
  else{
    alert("Record is not update ! ")
  }

  (this.mod_2?.nativeElement as HTMLElement).style.display="none";
  document.body.classList.remove('model-open');

}

deleteprdt(id:number)
{
  var result = window.confirm("Do you want to delete the record: ");
  if(result)
  {
    this.myserv.deleteproduct(id).subscribe(response=>console.log(response),error=>console.log(error))
  }
  else{
    alert("Record is not deleted ! ")
  }

}

updateprdtid(a:Product)
{

this.prnm=a.prnm;
this.price=a.price;
this.qty=a.qty;


this.updaterec=a;
console.log(this.updaterec)
}

}
