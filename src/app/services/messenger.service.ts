
import { Injectable } from '@angular/core';
import {  Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
 subject=new Subject
  constructor() { }
  sendMs(product){
    console.log(product)
    this.subject.next(product)
  }
  getMs(){
    return this.subject.asObservable()
  }
}
