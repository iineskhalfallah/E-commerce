import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-o',
  templateUrl: './o.component.html',
  styleUrls: ['./o.component.css']
})
export class OComponent implements OnInit {
  products: Product[]
  
  constructor(private br:BrandsService,
    private adminService:AdminService) { }

  ngOnInit(): void {
    this.br.getotherprod().subscribe((product)=>{
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
