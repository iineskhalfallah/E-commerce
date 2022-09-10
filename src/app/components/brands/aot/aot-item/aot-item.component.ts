import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-aot-item',
  templateUrl: './aot-item.component.html',
  styleUrls: ['./aot-item.component.css']
})
export class AotItemComponent implements OnInit {
  @Input() aot:Product
  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.aot).subscribe(() => {
      this.msg.sendMs(this.aot)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.aot).subscribe(()=>{
      this.msg.sendMs(this.aot)
    })    
  }
  

}
