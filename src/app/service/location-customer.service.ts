import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { AddressDeliveryRequest } from '../entity/address-delivery-request';

@Injectable({
  providedIn: 'root'
})
export class LocationCustomerService {

  url="http://localhost:8080/api"

  constructor(private http : HttpClient) { }

  getList(email : string):Observable<ApiRespone>{
    return  this.http.get<ApiRespone>(this.url+"/locationCostumer/"+email);
  }

  postAdress(adressDelivery : AddressDeliveryRequest):Observable<ApiRespone>{
    return  this.http.post<ApiRespone>(this.url+"/locationCostumer",adressDelivery);
  }


  putAddress(adressDelivery : AddressDeliveryRequest,idAddress : number):Observable<ApiRespone>{

    return  this.http.put<ApiRespone>(this.url+"/locationCostumer/"+idAddress,adressDelivery);
  }

}
