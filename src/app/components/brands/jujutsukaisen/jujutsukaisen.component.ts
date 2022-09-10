import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-jujutsukaisen',
  templateUrl: './jujutsukaisen.component.html',
  styleUrls: ['./jujutsukaisen.component.css']
})
export class JujutsukaisenComponent implements OnInit {
  jjkProd:Product[]
  constructor(private brandsService:BrandsService,
    private msg: MessengerService) { }

  ngOnInit(): void {
    this.brandsService.getjjkProd().subscribe((jjk)=>{
      this.jjkProd=jjk;
    })
  }

}
