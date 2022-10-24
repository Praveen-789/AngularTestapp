import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private http:HttpClient) { }

   getdate()
   {
    let date= new Date();
   //let map=new Map
    return date;
   }

   getdata(){
    return('praveen')
   }

   getallusers():Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
   }
} 
