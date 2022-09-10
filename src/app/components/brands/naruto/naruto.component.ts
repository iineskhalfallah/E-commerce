import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css']
})
export class NarutoComponent implements OnInit {
  narutoProd:Product[]
  constructor(private brandsService:BrandsService) { }

  ngOnInit(): void {
    this.brandsService.getnarutoProd().subscribe((n)=>{
      this.narutoProd=n;
    })
  }

}
