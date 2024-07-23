import { Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { ProductcompComponent } from './product/productcomp/productcomp.component';



export const routes: Routes = [

  {path:'',redirectTo:'customer',pathMatch:"full"},
  {path:'admin',component:AdminhomeComponent},
  {path:'customer',component:CustomerhomeComponent},
  {path:'product',component:ProductcompComponent}

];
