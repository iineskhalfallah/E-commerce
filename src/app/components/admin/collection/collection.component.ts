import { CollectionService } from './../../../services/collection.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }
 
    // jean(){
    //   this.colServ.getJeans().subscribe((product)=>{
    //     this.jeans=product
    //   }
    //   )
    // }
  

}
