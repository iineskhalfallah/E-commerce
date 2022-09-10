import { WishlistService } from 'src/app/services/wishlist.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-tshirt-item',
  templateUrl: './tshirt-item.component.html',
  styleUrls: ['./tshirt-item.component.css']
})
export class TshirtItemComponent implements OnInit {
 @Input() tshirtItem: Product
  constructor( private msg :MessengerService,
    private cartService:CartService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.tshirtItem).subscribe(() => {
      this.msg.sendMs(this.tshirtItem)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.tshirtItem).subscribe(()=>{
      this.msg.sendMs(this.tshirtItem)
    })    
  }
  
}
