import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url ="http://localhost:8080/api"


  constructor(private http : HttpClient, private cookieService : CookieService) { }

  token = this.cookieService.get("jtoken");

  headers_bearer =  new HttpHeaders().set("Authorization", "Bearer " + this.token);


  // create order 
  postOrder(email : string):Observable<ApiRespone>{
    return this.http.post<ApiRespone>(this.url+"/create-order?email="+email,null,{headers:this.headers_bearer})
  }

  // get order by email 
  getOrder(email : string):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/order?email="+email,{headers:this.headers_bearer})
  }

  getOrderById(idOrder : number):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/manageOrder/"+idOrder,{headers:this.headers_bearer})
  }


  getOrderAll():Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/manageOrder",{headers:this.headers_bearer})
  }


  // getOrderDetail

  getOrderDetail(idOrder : number):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/order/"+idOrder,{headers:this.headers_bearer})
  }



}
