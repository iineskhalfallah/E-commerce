
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit , Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // sharing data between child and parent components
 
  @Input() productItem: Product
  
  constructor(private msg: MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) 
    { }

  ngOnInit(){
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMs(this.productItem)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.productItem).subscribe(()=>{
      this.msg.sendMs(this.productItem)
    })    
  }

}
