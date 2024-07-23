import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Category } from '../../models/Category';
import { ListproductpgComponent } from "../listproductpg/listproductpg.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ListproductpgComponent,FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  public catobj:Category[] |any
  prdt:any

  @ViewChild("mod_1",{static:false}) mod_1?:ElementRef;

  selectedFile: File = null;

  prnm :''
  price:''
  qty:''
  pic:BinaryType
  desc:''
  ct:Category[]


    constructor(private myserv:MyserviceService)
    {
      this.myserv.getallcategory().subscribe(res=>
        {
        this.catobj = res
        }
       ,
        error=>console.log(error)
      );

    this.myserv.getallproducts().subscribe(
        response=>{
          this.prdt=response
        },
        error=>console.log(error)
        );

    }





    handleSelectChange(e:any)
    {
      var selectElement = e.target;
      var value = selectElement.value;
      this.ct =this.catobj.filter(m=>m.catid==value)

    }




addnewclose()
  {
    (this.mod_1?.nativeElement as HTMLElement).style.display="none";
    document.body.classList.remove('model-open');
  }


addnewsave()
{


  //save logic
  let data = {
    prnm :this.prnm,
    price:this.price,
    qty:this.qty,
    desc:this.desc,
    ct:{catid:this.ct[0].catid,catnm:this.ct[0].catnm}
  }

  const formData = new FormData();


      formData.append('data',new Blob([JSON.stringify(data)],{ type: "application/json"}));
      formData.append('pic', this.selectedFile);

  this.myserv.addcake(formData).subscribe(
    res=>{
      console.log(res)
    console.log(formData)
  },
    error=>console.log(error));


    (this.mod_1?.nativeElement as HTMLElement).style.display="none";
    document.body.classList.remove('model-open');

}


onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}



}
