import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { UserResponse } from '../entity/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:8080/api"

  constructor(private http : HttpClient) { }

  // get user by  email 
  getUserByEmail(email : string):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/user/"+email);
  }

  postUser(UserResponse : UserResponse):Observable<ApiRespone>{
    console.log("ok")
    return this.http.post<ApiRespone>(this.url+"/user",UserResponse)

  }

}
