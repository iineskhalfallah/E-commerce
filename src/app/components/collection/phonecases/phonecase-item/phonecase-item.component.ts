import { WishlistService } from 'src/app/services/wishlist.service';
import { wishlistUrl } from './../../../../config/api';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-phonecase-item',
  templateUrl: './phonecase-item.component.html',
  styleUrls: ['./phonecase-item.component.css']
})
export class PhonecaseItemComponent implements OnInit {
  @Input() phcasesItem:Product
  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.phcasesItem).subscribe(() => {
      this.msg.sendMs(this.phcasesItem)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.phcasesItem).subscribe(()=>{
      this.msg.sendMs(this.phcasesItem)
    })    
  }
}
