import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-other-item',
  templateUrl: './other-item.component.html',
  styleUrls: ['./other-item.component.css']
})
export class OtherItemComponent implements OnInit {
  @Input() other:Product
  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
handlerAddToCart(){
    this.cartService.addProductToCart(this.other).subscribe(() => {
      this.msg.sendMs(this.other)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.other).subscribe(()=>{
      this.msg.sendMs(this.other)
    })    
  }
}
