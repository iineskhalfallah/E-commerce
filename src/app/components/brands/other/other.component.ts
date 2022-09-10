import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  otherprod:Product[]
  constructor(private brandsService:BrandsService) { }

  ngOnInit(): void {
  this.brandsService.getotherprod().subscribe((n)=>{
      this.otherprod=n;
    })
  }

}
