import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CollectionService } from 'src/app/services/collection.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.css']
})
export class AllItemComponent implements OnInit {
  @Input() allproductItem: Product
  constructor(private collectionService:CollectionService,
    private msg :MessengerService,private cartService:CartService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerAddToCart(){
    this.cartService.addProductToCart(this.allproductItem).subscribe(() => {
      this.msg.sendMs(this.allproductItem)
    })   
  }
  handlerAddtoWishList(){
    this.wishlistService.addToWishList(this.allproductItem).subscribe(()=>{
      this.msg.sendMs(this.allproductItem)
    })    
  }
}
