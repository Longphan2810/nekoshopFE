import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { UserResponse } from '../entity/user-response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:8080/api"

 

  constructor(private http : HttpClient,private  cookieService : CookieService) { }

  token = this.cookieService.get("jtoken");
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);

  // get list User (manage)
  getUsers():Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/manageUser",{headers : this.headers_object});
  }
  // get list User (manage)
  getUserById(idUser : number):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/manageUser/"+idUser,{headers : this.headers_object});
  }

  // get user by  email 
  getUserByEmail(email : string):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/user/"+email,{headers : this.headers_object});
  }

  postUser(UserResponse : UserResponse):Observable<ApiRespone>{
    console.log("ok")
    return this.http.post<ApiRespone>(this.url+"/user",UserResponse,{headers:this.headers_object})

  }

}
