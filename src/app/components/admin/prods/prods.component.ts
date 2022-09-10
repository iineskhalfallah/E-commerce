import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css']
})
export class ProdsComponent implements OnInit {
  products: Product[]
  searchText:any
  constructor(private productService:ProductService,
    private adminService:AdminService) { }

  ngOnInit(): void {
    this.productService.getallprod().subscribe((product)=>{
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
