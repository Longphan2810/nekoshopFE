import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { ProductRequest } from '../entity/product-request';
import { LoginService } from './login.service';
import { CartRequest } from '../entity/cart-request';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ShopcartService {

  url ="http://localhost:8080/api"
  

  constructor(private http : HttpClient, private cookieService : CookieService) { }

  token = this.cookieService.get("jtoken");

  headers_bearer =  new HttpHeaders().set("Authorization", "Bearer " + this.token);

// get shop cart
  getShopCart():Observable<ApiRespone>{

    return this.http.get<ApiRespone>(this.url+"/shopingCart/"+LoginService.emailUser,{headers:this.headers_bearer});

  }

  //get list for check stock

  getCheckStock():Observable<ApiRespone>{

    return this.http.get<ApiRespone>(this.url+"/shopCartCheck/"+LoginService.emailUser,{headers:this.headers_bearer});

  }

  // post product
  postProductToCard(cartRequest : CartRequest):Observable<ApiRespone>{

   return this.http.post<ApiRespone>(this.url+"/shopingCart",cartRequest,{headers:this.headers_bearer});

  }

  // put product 
  putProductToCard(cartRequest : CartRequest):Observable<ApiRespone>{

    return this.http.put<ApiRespone>(this.url+"/shopingCart",cartRequest,{headers:this.headers_bearer});
 
   }

    // put product 
  DeleteProductToCard(emailUser : string , idProductDetail : number):Observable<ApiRespone>{

    return this.http.delete<ApiRespone>(this.url+"/shopingCart/"+emailUser+"/"+idProductDetail);
 
   }

}
