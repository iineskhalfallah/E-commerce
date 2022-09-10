import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-glass-item',
  templateUrl: './glass-item.component.html',
  styleUrls: ['./glass-item.component.css']
})
export class GlassItemComponent implements OnInit {
  @Input() glassItem :Product
  constructor(private cartService:CartService,
    private wishlistService:WishlistService ,
    private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.glassItem).subscribe(() => {
      this.msg.sendMs(this.glassItem)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.glassItem).subscribe(()=>{
      this.msg.sendMs(this.glassItem)
    })    
  }
}
