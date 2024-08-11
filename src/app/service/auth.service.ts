import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper : JwtHelperService, private cookieService : CookieService) { }

  public isAutheticated():boolean{
    let token = this.cookieService.get("jtoken")
    return !this.jwtHelper.isTokenExpired(token);
  }

}
