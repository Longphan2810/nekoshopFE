import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { ProductRequest } from '../entity/product-request';

@Injectable({
  providedIn: 'root'
})
export class ShopcartService {

  url ="http://localhost:8080/api"
  

  constructor(private http : HttpClient) { }

// get shop cart
  getShopCart():Observable<ApiRespone>{

    return this.http.get<ApiRespone>(this.url+"/shopCart");

  }
  // post product
  postProductToCard(productRequest : ProductRequest):Observable<ApiRespone>{

   return this.http.post<ApiRespone>(this.url+"/addToCard",productRequest);

  }

}
