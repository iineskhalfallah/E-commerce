import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-tote',
  templateUrl: './tote.component.html',
  styleUrls: ['./tote.component.css']
})
export class ToteComponent implements OnInit {
  products: Product[]
  
  constructor(private col:CollectionService,
    private adminService:AdminService) { }

  ngOnInit(): void {
    this.col.getTote().subscribe((product)=>{
      this.products=product;
  })
  }
  deleteProduct(product:Product){
    console.log(product.id)
    this.adminService.deleteProduct(product.id).subscribe(data=>{
        this.products=this.products.filter(u =>u!== product)
        alert("Deleted successfuly");
        
    })
  }

}
