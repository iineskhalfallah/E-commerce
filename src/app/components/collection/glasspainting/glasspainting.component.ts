import { CollectionService } from './../../../services/collection.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-glasspainting',
  templateUrl: './glasspainting.component.html',
  styleUrls: ['./glasspainting.component.css']
})
export class GlasspaintingComponent implements OnInit {

  constructor(private collectionService:CollectionService) { }
  glassList:Product[]
  ngOnInit(): void {
    this.collectionService.getglass().subscribe((glass)=>{
      this.glassList=glass;
    })
  }

}
