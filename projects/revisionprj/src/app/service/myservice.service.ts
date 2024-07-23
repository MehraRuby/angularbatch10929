import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Users } from '../models/Users';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }



authenticateuser(data:Users)
{
  return this.http.post("http://localhost:8080/user/checkuser",data)
}


getallproducts():Observable<Product[]>
{
  return this.http.get<Product[]>("http://localhost:8080/product/listprdt")
}

getallcategory():Observable<Category[]>
{
  return this.http.get<Category[]>("http://localhost:8080/category/listcat")
}



addcake(formdata:any)
{
  return this.http.post("http://localhost:8080/product/addprdt",formdata,{ observe: 'response' });
}


deleteproduct(id:number)
{
  return this.http.delete("http://localhost:8080/product/delprdt/"+id)
}


updateproduct(a:Product)
{
  return this.http.put("http://localhost:8080/product/updateprdt",a);
}



}
