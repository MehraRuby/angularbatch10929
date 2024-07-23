import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyserviceService } from '../../service/myservice.service';


@Component({
  selector: 'app-cartcomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartcomp.component.html',
  styleUrl: './cartcomp.component.css'
})
export class CartcompComponent {
@Input() cartdata=[]
@Output() delprdt=new EventEmitter<any>()


constructor(private myser:MyserviceService){

}


del(a:any)
{
this.delprdt.emit(a)
}




}
