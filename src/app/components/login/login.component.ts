import { UserService } from './../../services/user.service';
import { AdminUrl, loginUrl, registerUrl } from './../../config/api';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: any ={}
public loginForm:FormGroup
public  adminEmail:'admin@gmail.com'
public  adminPwd:'amin1234'
  message: any;
  constructor(private formBuilder:FormBuilder,
              private http:HttpClient,private userService:UserService,
              private router:Router,
              private dataService:UserService) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>(AdminUrl)
      .subscribe(res=>{
        const user =res.find((a:any)=>{
        return a.email=== this.loginForm.value.email &&
        a.password === this.loginForm.value.password
        });
        if(user){
          console.log(res);
          this.loginForm.reset()
          this.router.navigate(['admin/dashbord'])        
          } else{
          this.dataService.userlogin(this.loginForm.value.email,this.loginForm.value.password)
          .subscribe(
            data =>{
              console.log(data);
              this.router.navigate(['myaccount'])      
            }
          ,err=>{
              alert("Login Failed!Email or Password Incorrect")
            })
          }
        });
    }
}
 