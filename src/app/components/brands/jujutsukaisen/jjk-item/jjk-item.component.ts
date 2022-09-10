import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Jjk } from 'src/app/models/brands/jjk';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-jjk-item',
  templateUrl: './jjk-item.component.html',
  styleUrls: ['./jjk-item.component.css']
})
export class JjkItemComponent implements OnInit {
  @Input() jjk:Product
  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.jjk).subscribe(() => {
      this.msg.sendMs(this.jjk)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.jjk).subscribe(()=>{
      this.msg.sendMs(this.jjk)
    })    
  }
}
