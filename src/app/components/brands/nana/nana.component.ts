import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-nana',
  templateUrl: './nana.component.html',
  styleUrls: ['./nana.component.css']
})
export class NanaComponent implements OnInit {

  nanaProd:Product[]
  constructor(private brandsService:BrandsService) { }

  ngOnInit(){
    this.brandsService.getNanaProd().subscribe((nana)=>{
      this.nanaProd=nana;
    })
  }

}
