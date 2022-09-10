import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
users:User[]
userid:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  this.userService.getuser(this.userid).subscribe((user)=>{
      this.users=user;
  })
  }

}
