import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  allproductUrl, glassUrl, jeanUrl, phcaseUrl, toteUrl, tshirtUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http:HttpClient) { }
  getJeans(): Observable<Product []> {
    return this.http.get<Product[]>(jeanUrl)
  }
 getglass(): Observable<Product []> {
    return this.http.get<Product[]>(glassUrl)
  }
  getphCase(): Observable<Product []> {
    return this.http.get<Product[]>(phcaseUrl)
  }
  getTote(): Observable<Product[]> {
    return this.http.get<Product[]>(toteUrl)
  }
  getTshirts(): Observable<Product[]> {
    return this.http.get<Product[]>(tshirtUrl)
  }
  getProduct(): Observable<Product []> {
    return this.http.get<Product[]>(allproductUrl)
  }
}
