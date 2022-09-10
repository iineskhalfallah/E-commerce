import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addForm:FormGroup
  imageSrc:any = '';
  status:boolean = false
  file: File;

  constructor(private formBuilder:FormBuilder,
    private adminService:AdminService,private http:HttpClient,
    private router:Router) {
      this.addForm=this.formBuilder.group({
        name:['',Validators.required],
        price:['',[Validators.required]],
        imageUrl:[],
        brands:['',[Validators.required]],
        collection:['',[Validators.required]]
      })
     }
    
  ngOnInit(): void {
       
    
  }
  add(){
   
    this.adminService.createProd(this.addForm.value.name,
      this.addForm.value.price,
      this.addForm.value.imageUrl,
      this.addForm.value.brands,
      this.addForm.value.collection)
    .subscribe(data=>{
      alert("added successfuly");
      console.log(data)
      this.addForm.reset();
      this.router.navigate(['admin/dashbord']);
    },err=>{
      alert("Something Went Wrong! Try Again")
    })
  }  
  onFileChange(event:any) {
    this.file = event.target.files[0];
    console.log(this.file)
    this.addForm.patchValue({
      imageUrl:this.file
    })
    this.addForm.get('imageUrl')
  }
}
