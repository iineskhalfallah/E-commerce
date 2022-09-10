import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-aot',
  templateUrl: './aot.component.html',
  styleUrls: ['./aot.component.css']
})
export class AotComponent implements OnInit {
  aotProd:Product[]
  constructor(private brandsService:BrandsService) { }

  ngOnInit(): void {
    this.brandsService.getaotProd().subscribe((aot)=>{
      this.aotProd=aot;
    })
  }

}
