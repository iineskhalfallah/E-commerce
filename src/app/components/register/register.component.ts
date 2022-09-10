import { UserService } from './../../services/user.service';
import { CartItem } from 'src/app/models/cart-item';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { registerUrl } from 'src/app/config/api';

function passwordsMustMatch(form){
  const password =form.get('password')
  const confirmPassword=form.get('confirmPassword')
  if (password.value !== confirmPassword.value){
    confirmPassword.setErrors({passwordMatch:true})
  }else{
    confirmPassword.setErrors(null) 
  }
  return null
}

function symbolValidator(control){
  if (control.hasError('minlength')) return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup

  constructor(private formBuilder:FormBuilder,
              private userService:UserService,private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:[''],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:''
    }, {
      Validators: passwordsMustMatch
    })
  }
register(){
  this.userService.createUser(this.registerForm.value)
  .subscribe(data=>{
    alert("Register is successful");
    this.registerForm.reset();
    this.router.navigate(['login']);
  },err=>{
    alert("Something Went Wrong! Try Again")
  })
  
 
  
}
}
