import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-phonecases',
  templateUrl: './phonecases.component.html',
  styleUrls: ['./phonecases.component.css']
})
export class PhonecasesComponent implements OnInit {
  
  constructor(private collectionService:CollectionService) { }
  phcasesList:Product[]
  ngOnInit(): void {
    this.collectionService.getphCase().subscribe((phcase)=>{
      this.phcasesList=phcase;
      console.log(this.phcasesList);
    })
  }

}
