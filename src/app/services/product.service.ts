import { ApiResponse } from './../models/api-response';
import { allprodUrl, productUrl,delProdUrl, getbyIdUrl } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl)
  }
  getallprod(): Observable<Product[]> {
    return this.http.get<Product[]>(allprodUrl)
  }
  getSingleProd(id:any){
    return this.http.get<Product[]>(getbyIdUrl+id)
    
  }
}
