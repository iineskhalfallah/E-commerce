import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { CollectionService } from 'src/app/services/collection.service';
import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

product:Product[]
  constructor(private collectionService:CollectionService) { }

  ngOnInit(): void {
      this.collectionService.getProduct().subscribe((prod)=>{
      this.product=prod;
    })
  }
  
}
