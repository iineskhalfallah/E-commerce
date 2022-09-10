import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {
  jeanList : Product[]
  constructor(private collectionService:CollectionService) { }

  ngOnInit(): void {
    this.collectionService.getJeans().subscribe((jean)=>{
      this.jeanList=jean;
    })
  }

}
