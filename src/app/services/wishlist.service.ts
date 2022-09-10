import { Observable } from 'rxjs';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { wishlistUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Wishlist } from '../models/wishlist';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishList(): Observable<Wishlist[]>{
    return this.http.get<Wishlist[]>(wishlistUrl).pipe(
      map((res:any) =>{
        let wishlistItems:Wishlist[]=[];
        for (let wlItem of res){
           let productEx = false
           for(let i in wishlistItems){
             if(wishlistItems[i].productId === wlItem.product.id){
               productEx= true
               break;
             }
           }
 
           if(!productEx){
             wishlistItems.push(new Wishlist(wlItem.id,wlItem.product))
           }
         }
        return wishlistItems
       })
     );
  }

  addToWishList(product:Product):Observable<any>{
    return this.http.post(wishlistUrl,{product})
    
  }
  removeOfWishList(productId):Observable<any>{
    return this.http.delete(wishlistUrl +'/' +productId)
  }
}
