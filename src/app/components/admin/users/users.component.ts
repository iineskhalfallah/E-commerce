import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  constructor(private userService:UserService,
    private adminService:AdminService) { }

  ngOnInit(): void {
    this.userService.getallusers().subscribe((user)=>{
      this.users=user;
  })
}
  deleteuser(user:User){
    console.log(user.id)
    this.adminService.deleteuser(user.id).subscribe(data=>{
        this.users=this.users.filter(u =>u!== user)
        alert("Deleted successfuly");
        
    })
  }

}
