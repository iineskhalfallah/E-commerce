import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-jean-item',
  templateUrl: './jean-item.component.html',
  styleUrls: ['./jean-item.component.css']
})
export class JeanItemComponent implements OnInit {
@Input() jeanItem:Product
  constructor(private cartService:CartService,
    private wishlistService:WishlistService ,
    private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.jeanItem).subscribe(() => {
      this.msg.sendMs(this.jeanItem)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.jeanItem).subscribe(()=>{
      this.msg.sendMs(this.jeanItem)
    })    
  }
}
