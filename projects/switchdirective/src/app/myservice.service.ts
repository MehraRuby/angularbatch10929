import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { Users } from '../models/Users';


@Injectable({
  providedIn: 'root',

})

export class MyserviceService
{

public allprdt:Product[]=[]

  // hook - lifecycle method of service
  constructor(private http:HttpClient) { }


getallproducts():Observable<Product[]>
{
  return this.http.get<Product[]>("http://localhost:8080/product/listprdt")
}



getallcategory():Observable<Category[]>
{
  return this.http.get<Category[]>("http://localhost:8080/category/listcat")
}


createTransaction(amount:any)
{
  return this.http.get("http://localhost:8080/cart/getTransaction/"+amount);
}

sendmail()
{
  return this.http.get("http://localhost:8080/email/sendmail");
}




userexists(data:Users)
{
  return this.http.post("http://localhost:8080/user/checkuser",data)
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
