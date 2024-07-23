import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterOutlet],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent
{

  username=''
  password=''

  constructor(private route:Router,private myserv : MyserviceService)
  {}

  onSubmit()
  {
    let data={id:0,username:this.username,password:this.password}
    this.myserv.authenticateuser(data).subscribe(response=>{
      console.log(response)
      this.route.navigate(['/product'])

                }

                                              ,error=>console.log(error))


    console.log("Product component")

  }

}
