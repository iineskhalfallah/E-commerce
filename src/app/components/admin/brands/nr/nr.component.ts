import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-nr',
  templateUrl: './nr.component.html',
  styleUrls: ['./nr.component.css']
})
export class NrComponent implements OnInit {
  products: Product[]
  
  constructor(private br:BrandsService,
    private adminService:AdminService) { }

  ngOnInit(): void {
    this.br.getnarutoProd().subscribe((product)=>{
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
