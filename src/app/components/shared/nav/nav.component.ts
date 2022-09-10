import { WishlistService } from 'src/app/services/wishlist.service';
import { CartItem } from 'src/app/models/cart-item';
import { Wishlist } from "src/app/models/wishlist";
import { CartService } from 'src/app/services/cart.service';
import { Product } from './../../../models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartItems=[];
  wishlistItems=[];
  cartTotal =0;
  opened=false;
  toggleSidebar(){
    this.opened=!this.opened;
  }
  OP=false;
  toggleSidebar1(){
    this.OP=!this.OP;
  }

  constructor(private msg: MessengerService,
  private cartservice:CartService,
  private wishlistService:WishlistService) 
  { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    this.handleWlSubscription();
    this.loadWishlistItems();
  }
  handleSubscription(){
    this.msg.getMs().subscribe((product: Product) =>{
      this.loadCartItems();  
     })
  }
  loadCartItems(){
    this.cartservice.getCartItems().subscribe((items :CartItem[]) =>{
      this.cartItems=items;
      this.calculateCartTotal();
    })
  }
 
  calculateCartTotal(){
    this.cartTotal=0
    this.cartItems.forEach(item=>{
    this.cartTotal+=(item.qty *item.price)
    })
  }

  handleWlSubscription(){
    this.msg.getMs().subscribe((product: Product) =>{
      this.loadWishlistItems();  
     })
  }
  loadWishlistItems(){
    this.wishlistService.getWishList().subscribe((items :Wishlist[]) =>{
      this.wishlistItems=items;
      
    })
  }
}

