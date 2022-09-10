import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  addForm:any
  productId:any
  

  constructor(private formBuilder:FormBuilder,private prodService:ProductService,
    private adminService:AdminService,
    private router:Router,private url:ActivatedRoute) { 
      this.addForm=this.formBuilder.group({
        id:[],
        name:['',Validators.required],
        price:['',[Validators.required]],
        imageUrl:['',[Validators.required]],
        brands:[],
        collection:[]
        
      })
      }

  ngOnInit(): void {
    this.productId = this.url.snapshot.params
    
      this.prodService.getSingleProd(this.productId.id).subscribe(
        (data:any)=>{
          
          this.addForm.patchValue(data)
        });
    
    console.log(this.productId.id)
  }
  update(){
    
    this.adminService.updateProd(this.addForm.value)
    .subscribe(()=>{
      alert("Updated successfuly");
      this.router.navigate(['admin/dashbord']);
    },err=>{
      alert("Something Went Wrong! Try Again")
    })
  }  

}
