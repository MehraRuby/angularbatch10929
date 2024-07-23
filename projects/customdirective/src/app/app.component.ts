import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mydirective1Directive } from './mydirective1.directive'
import { DynamicdirectiveDirective } from './dynamicdirective.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Mydirective1Directive,DynamicdirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customdirective';
}
