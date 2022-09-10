import { AdminUrl } from './../config/api';
import { loginUrl, registerUrl } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { baseUrl,userUrl ,getUserByIdUrl} from '../config/api';
import { ApiResponse } from '../models/api-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }
  createUser(user: User):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(registerUrl, user);
  }
  public userlogin(email, password) {
    return this.http.post<any>(loginUrl, { email, password })
    .pipe(map(Users => {
    this.setToken(Users[0].name);
    this.getLoggedInName.emit(true);
    return Users;
    }));
    }
  public adminlogin(email, password) {
      return this.http.post<any>(AdminUrl, { email, password })
      .pipe(map(admins => {
      this.setToken(admins[0].name);
      this.getLoggedInName.emit(true);
      return admins;
      }));
  }
      setToken(token: string) {
      localStorage.setItem('token', token);
      }
      getToken() {
      return localStorage.getItem('token');
      }
      deleteToken() {
      localStorage.removeItem('token');
      }
      isLoggedIn() {
      const usertoken = this.getToken();
      if (usertoken != null) {
      return true
      }
      return false;
      }
  getallusers() {
        return this.http.get<User[]>(userUrl)
  } 
  getuser(id) {
        return this.http.get<User[]>(userUrl+'?id='+id)
  } 
  getUserById(id:any){
        return this.http.get<User[]>(getUserByIdUrl +id)
   }
}
