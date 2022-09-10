import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:any
  @Input() productItem: any
  
  constructor(private cartService:CartService,private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handlerRemoveFromCart(){
    this.cartService.removeOfCart(this.cartItem.id).subscribe(res=>{
      this.msg.sendMs(this.cartItem)
    }) 
  }
 
}
