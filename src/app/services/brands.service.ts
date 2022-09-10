import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aotUrl, dsUrl, jjkUrl, nanaUrl, narutoUrl, otherUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http:HttpClient) { }
  
  getNanaProd(): Observable<Product[]> {
    return this.http.get<Product[]>(nanaUrl)
  }


  getjjkProd(): Observable<Product[]> {
    return this.http.get<Product[]>(jjkUrl)
  }


  getdsProd(): Observable<Product[]> {
    return this.http.get<Product[]>(dsUrl)
  }

  getaotProd(): Observable<Product[]> {
    return this.http.get<Product[]>(aotUrl)
  }

  getnarutoProd(): Observable<Product[]> {
    return this.http.get<Product[]>(narutoUrl)
  }
  getotherprod():Observable<Product[]>{
    return this.http.get<Product[]>(otherUrl)
  }
}
