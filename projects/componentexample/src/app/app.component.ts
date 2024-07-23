import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  // property =  title , username

  title = 'Parent App Component';

  username="Administrator"

  usr:string=''

  path = "../assets/images/pic1.avif";


  sayHello()
  {
    alert(" SayHello ! ");
  }
}
