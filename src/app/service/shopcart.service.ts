import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { ProductRequest } from '../entity/product-request';
import { LoginService } from './login.service';
import { CartRequest } from '../entity/cart-request';

@Injectable({
  providedIn: 'root'
})
export class ShopcartService {

  url ="http://localhost:8080/api"
  

  constructor(private http : HttpClient) { }

// get shop cart
  getShopCart():Observable<ApiRespone>{

    return this.http.get<ApiRespone>(this.url+"/shopingCart/"+LoginService.emailUser);

  }

  //get list for check stock

  getCheckStock():Observable<ApiRespone>{

    return this.http.get<ApiRespone>(this.url+"/shopCartCheck/"+LoginService.emailUser);

  }

  // post product
  postProductToCard(cartRequest : CartRequest):Observable<ApiRespone>{

   return this.http.post<ApiRespone>(this.url+"/shopingCart",cartRequest);

  }

  // put product 
  putProductToCard(cartRequest : CartRequest):Observable<ApiRespone>{

    return this.http.put<ApiRespone>(this.url+"/shopingCart",cartRequest);
 
   }

    // put product 
  DeleteProductToCard(emailUser : string , idProductDetail : number):Observable<ApiRespone>{

    return this.http.delete<ApiRespone>(this.url+"/shopingCart/"+emailUser+"/"+idProductDetail);
 
   }

}
