import { Routes } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
{path:'',redirectTo:'customer',pathMatch:"full"},
{path:'customer',component:ChildComponent},
{path:'admin',component:AdminpanelComponent},
{path:'dashboard',component:DashboardComponent},
{path:'product',component:ProductComponent},
{path:'category',component:CategoryComponent}
];
