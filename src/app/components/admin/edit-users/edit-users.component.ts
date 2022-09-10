import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  registerForm:FormGroup
  userId: any
  

  constructor(private userService:UserService ,private url:ActivatedRoute
    ,private router:Router,private adminService:AdminService,private formBuilder:FormBuilder) { 
      this.registerForm=this.formBuilder.group({
        id:[],
        name:['',Validators.required],
        lastname:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],
        role:['',Validators.required]
      })
    }

  ngOnInit(): void {
    this.userId = this.url.snapshot.params
    
      this.userService.getUserById(this.userId.id).subscribe(
        (data:any)=>{
          console.log(data)
          this.registerForm.patchValue(data)
        });
    console.log(this.userId.id)
  }
  update(){
    
    this.adminService.updateUser(this.registerForm.value)
    .subscribe(()=>{
      alert("Updated successfuly");
      this.router.navigate(['admin/users']);
    },err=>{
      alert("Something Went Wrong! Try Again")
    })
  } 
}
