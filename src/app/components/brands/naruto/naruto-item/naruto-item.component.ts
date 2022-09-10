import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-naruto-item',
  templateUrl: './naruto-item.component.html',
  styleUrls: ['./naruto-item.component.css']
})
export class NarutoItemComponent implements OnInit {
  @Input() naruto:Product
  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.naruto).subscribe(() => {
      this.msg.sendMs(this.naruto)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.naruto).subscribe(()=>{
      this.msg.sendMs(this.naruto)
    })    
  }

}
