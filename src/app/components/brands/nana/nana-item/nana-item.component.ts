import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-nana-item',
  templateUrl: './nana-item.component.html',
  styleUrls: ['./nana-item.component.css']
})
export class NanaItemComponent implements OnInit {
  @Input() nana: Product
  constructor(private cartService:CartService,
    private wishlistService:WishlistService ,
    private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.nana).subscribe(() => {
      this.msg.sendMs(this.nana)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.nana).subscribe(()=>{
      this.msg.sendMs(this.nana)
    })    
  }
}
