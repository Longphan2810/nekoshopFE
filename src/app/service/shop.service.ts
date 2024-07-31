import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url = "http://localhost:8080/api"

  constructor(private http : HttpClient) { }

  // get list product shop 
  getListProduct():Observable<ApiRespone>{

   return this.http.get<ApiRespone>(this.url+"/shop")

  }
   // get list product shop 
   getListProductAndFilter(keyword:string,sortBy:string,filterByPrice:string,page:number):Observable<ApiRespone>{

    let filter = "p=" + page +"&sortBy=" + sortBy + "&keywords=" + keyword +"&filterByPrice=" + filterByPrice
    console.log(this.url+"/shop/filter?"+filter)
    return this.http.get<ApiRespone>(this.url+"/shop/filter?"+filter);
 
   }


   // get list product by cate  
   getListProductByCate(cateName : string):Observable<ApiRespone>{

    return this.http.get<ApiRespone>(this.url+"/shop/"+cateName)
 
   }
   // get list product by cate  and filter
   getListProductByCateAndFilter(cateName : string,keyword:string,sortBy:string,filterByPrice:string,page:number):Observable<ApiRespone>{

    let filter = "p=" + page +"&sortBy=" + sortBy + "&keywords=" + keyword +"&filterByPrice=" + filterByPrice
    console.log(this.url+"/shop/"+cateName+"/filter?"+filter)
    return this.http.get<ApiRespone>(this.url+"/shop/"+cateName+"/filter?"+filter);
 
   }

  

}
