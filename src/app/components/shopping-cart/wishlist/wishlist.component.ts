import { MessengerService } from './../../../services/messenger.service';
import { WishlistService } from './../../../services/wishlist.service';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
@Input() wishlistItem:any

  constructor(private msg:MessengerService,
    private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handlerRemoveFromWL(){
    this.wishlistService.removeOfWishList(this.wishlistItem.id).subscribe(res=>{
      this.msg.sendMs(this.wishlistItem)
    })
    
  }
}
