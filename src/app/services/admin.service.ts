import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ApiResponse } from '../models/api-response';
import { addProdUrl,allprodUrl,delProdUrl ,updateProdUrl,delUserUrl,addUserUrl, updateUserUrl} from '../config/api';
import { map } from "rxjs/operators";
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  file: File;

  constructor(private http:HttpClient) { }


  createProd(name :string,
    price : string,
    imageUrl:File,
    brands :string,
    collection:string):Observable<any>{
    var formData= new FormData();
    formData.append('name',name)
    formData.append('price',price)
    formData.append('imageUrl',imageUrl);
    formData.append('brands',brands);
    formData.append('collection',collection);
    return this.http.post(addProdUrl ,formData)
  }
  createUser(user: User):Observable<any>{
    return this.http.post(addUserUrl ,user)
  }
  updateProd(prod: Product):Observable<any>{
    return this.http.put(updateProdUrl ,prod)
  }
  updateUser(user: User):Observable<any>{
    return this.http.put(updateUserUrl ,user)
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(delProdUrl+id)
  }
  deleteuser(id:number):Observable<any>{
    return this.http.delete(delUserUrl+id)
    
      
  }

}