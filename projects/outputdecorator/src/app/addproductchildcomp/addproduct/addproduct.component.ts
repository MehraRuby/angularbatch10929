import { Component ,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent
{

  @Output() myevent= new EventEmitter<any>()

prid:string;
prname:string ;


submit()
  {
    var ob = {pid:this.prid,pnm:this.prname}
    this.myevent.emit(ob);
  }

}
