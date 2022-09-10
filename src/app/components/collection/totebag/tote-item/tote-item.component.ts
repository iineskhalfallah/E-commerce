import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-tote-item',
  templateUrl: './tote-item.component.html',
  styleUrls: ['./tote-item.component.css']
})
export class ToteItemComponent implements OnInit {
  @Input() toteItem:Product
  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.toteItem).subscribe(() => {
      this.msg.sendMs(this.toteItem)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.toteItem).subscribe(()=>{
      this.msg.sendMs(this.toteItem)
    })    
  }
}
