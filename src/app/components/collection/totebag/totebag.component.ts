import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-totebag',
  templateUrl: './totebag.component.html',
  styleUrls: ['./totebag.component.css']
})
export class TotebagComponent implements OnInit {
  toteList:Product[]
  constructor(private collectionService:CollectionService) { }

  ngOnInit(): void {
    this.collectionService.getTote().subscribe((phcase)=>{
    this.toteList=phcase;
  })
  }
  
}
