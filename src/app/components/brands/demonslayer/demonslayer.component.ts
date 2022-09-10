import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-demonslayer',
  templateUrl: './demonslayer.component.html',
  styleUrls: ['./demonslayer.component.css']
})
export class DemonslayerComponent implements OnInit {
  dsProd:Product[]
  constructor(private brandsService:BrandsService) { }

  ngOnInit(): void {
    this.brandsService.getdsProd().subscribe((demon)=>{
      this.dsProd=demon;
    })
  }

}
