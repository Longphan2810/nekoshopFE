import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenRequest } from '../entity/authen-request';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/api/"

  public static loggedin = false;
  

  constructor(private http : HttpClient,  private cookieService  : CookieService) { 
    let token = this.cookieService.get("jtoken");
    if(token!=""){
      LoginService.loggedin = true
      console.log(LoginService.loggedin)
    
    } 
  }

  //check loggedin
  checkLog(){
    let token = this.cookieService.get("jtoken");
    if(token!=""){
      LoginService.loggedin = true
      console.log(LoginService.loggedin)
      console.log("token  :"+ token)
    } else {
      console.log("ụa ? "+ token)
    }

  }

  // login
  postLogin(authenRequest : AuthenRequest):Observable<ApiRespone>{
    return this.http.post<ApiRespone>(this.url+"login", authenRequest,{withCredentials : true})
  }
  // logout
  getLogout(){
    LoginService.loggedin = false
    this.cookieService.delete("jtoken")
  }

  getLoggedin():boolean{
   return  LoginService.loggedin;
  }
  setLoggedin(status : boolean){
    LoginService.loggedin =status
  }


}
