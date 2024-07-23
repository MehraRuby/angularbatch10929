import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoundpipePipe } from "./roundpipe.pipe";
import { PowerofPipe } from "./powerof.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RoundpipePipe, PowerofPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'builtin_custompipes';

  dt ="01/10/2021"
  firstname = "jack"
  lastname="WILLIAM"


}
