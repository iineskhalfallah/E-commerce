import { Product } from 'src/app/models/product';
import { cartUrl } from 'src/app/config/api';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { CartItem } from 'src/app/models/cart-item';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((res:any) =>{
       let cartItems:CartItem[]=[];
       for (let item of res){
          let productExist = false

          for(let i in cartItems){
            if(cartItems[i].productId === item.product.id){
              cartItems[i].qty++
              productExist= true
              break;
            }
          }

          if(!productExist){
            cartItems.push(new CartItem(item.id,item.product))
          }
        }
       return cartItems
      })
    );
  }

  addProductToCart(product:Product):Observable<any>{
    return this.http.post(cartUrl,{product});
  }
  removeOfCart(productId):Observable<any>{
    return this.http.delete(cartUrl +'/' +productId);   
  }

}
