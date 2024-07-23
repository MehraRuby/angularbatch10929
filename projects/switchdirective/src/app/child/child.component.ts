import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ContactComponent } from "../contact/contact.component";
import { LoginComponent } from "../login/login.component";
import { CartComponent } from "../cart/cart.component";


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [HomeComponent, AboutusComponent, ContactComponent, LoginComponent, CartComponent,FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


val:number=0


getHome(){this.val=0}
getAbout(){this.val=1}
getContact(){this.val=2}
getLogin(){this.val=3}
getCart(){this.val=4}

}
