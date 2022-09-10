import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-demon-item',
  templateUrl: './demon-item.component.html',
  styleUrls: ['./demon-item.component.css']
})
export class DemonItemComponent implements OnInit {
  @Input() demon: Product
  constructor(private cartService:CartService,
    private wishlistService:WishlistService ,
    private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.demon).subscribe(() => {
      this.msg.sendMs(this.demon)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.demon).subscribe(()=>{
      this.msg.sendMs(this.demon)
    })    
  }

}
