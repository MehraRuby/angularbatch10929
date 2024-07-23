import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})
export class AdminpanelComponent
{
  username: any;
  password: any;


  constructor(private myserv:MyserviceService,private route:Router){}

  onSubmit()
  {

  let obj ={id:0,username:this.username,password:this.password}
  console.log(obj)
  this.myserv.userexists(obj).subscribe(
                                              response =>
                                              {
                                                console.log(response)
                                                // dynamic navigation
                                                if(response)
                                                  {
                                                    this.route.navigate(["/dashboard"]);
                                                  }

                                              },
                                              error=>console.log(error)
                                            );
  }






}
