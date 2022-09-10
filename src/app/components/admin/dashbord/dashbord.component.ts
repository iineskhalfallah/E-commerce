import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  products: Product[]
  users:User[]
  userId: any
  constructor(private userService:UserService,private url:ActivatedRoute) { }
    opened=false;
    toggleSidebar(){
      this.opened=!this.opened;
    }
  ngOnInit(): void {
    this.userId = this.url.snapshot.params
    
    this.userService.getUserById(this.userId.id).subscribe(
      (data:any)=>{
        console.log(data)
        
      });
  console.log(this.userId.id)
}
 
}
