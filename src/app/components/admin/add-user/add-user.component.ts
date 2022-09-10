import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  registerForm:FormGroup

  constructor(private formBuilder:FormBuilder,private adminService:AdminService,
              private router:Router) {
     
    }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      role:['',Validators.required]
      })
     }
    
 
  add(){
    console.log(this.registerForm.value)
    this.adminService.createUser(this.registerForm.value)
    .subscribe(data=>{
      alert("added successfuly");
      this.registerForm.reset();
      this.router.navigate(['admin/users']);
    },err=>{
      alert("Something Went Wrong! Try Again")
    })
  } 

}
