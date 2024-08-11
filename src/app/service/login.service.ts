import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthenRequest } from '../entity/authen-request';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { CookieService } from 'ngx-cookie-service';
import { platform } from 'os';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/api/"

  public static loggedin = false;
  public static emailUser = "";
  

  constructor(private http : HttpClient,  private cookieService  : CookieService) { 
    let token = this.cookieService.get("jtoken");
    let mail = this.cookieService.get("email");
    if(token!=""&&mail!=""){
      LoginService.loggedin = true
      LoginService.emailUser=mail
      console.log(LoginService.loggedin)
      console.log(token)
    } 
  }

  static reset(){
     LoginService.loggedin = false;
     LoginService. emailUser = "";
     
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
