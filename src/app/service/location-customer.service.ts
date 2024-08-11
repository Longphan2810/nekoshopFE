import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { AddressDeliveryRequest } from '../entity/address-delivery-request';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LocationCustomerService {

  url="http://localhost:8080/api"

  constructor(private http : HttpClient, private cookieService : CookieService) { }

  token = this.cookieService.get("jtoken");

  headers_bearer =  new HttpHeaders().set("Authorization", "Bearer " + this.token);


  getList(email : string):Observable<ApiRespone>{
    return  this.http.get<ApiRespone>(this.url+"/locationCostumer/"+email,{headers: this.headers_bearer});
  }

  postAdress(adressDelivery : AddressDeliveryRequest):Observable<ApiRespone>{
    return  this.http.post<ApiRespone>(this.url+"/locationCostumer",adressDelivery,{headers: this.headers_bearer});
  }


  putAddress(adressDelivery : AddressDeliveryRequest,idAddress : number):Observable<ApiRespone>{

    return  this.http.put<ApiRespone>(this.url+"/locationCostumer/"+idAddress,adressDelivery,{headers: this.headers_bearer});
  }

}
