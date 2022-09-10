import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {
  tshirtList:Product[]
  constructor(private collectionService:CollectionService) { }

  ngOnInit(): void {
    this.collectionService.getTshirts().subscribe((tshirts)=>{
      this.tshirtList=tshirts;
    })
  }

}
