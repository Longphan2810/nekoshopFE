import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { Product } from '../entity/product';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:8080/api";
  
  constructor(private http : HttpClient, private cookieService : CookieService) { }

  token = this.cookieService.get("jtoken");

  headers_bearer =  new HttpHeaders().set("Authorization", "Bearer " + this.token);

  // get list product 
  getProducts():Observable<ApiRespone>{

    return this.http.get<ApiRespone>(this.url+"/manageProduct",{headers:this.headers_bearer});

  }

// get list product by name
getProductsByName(name : string):Observable<ApiRespone>{

  return this.http.get<ApiRespone>(this.url+"/manageProduct/findByName/"+name,{headers:this.headers_bearer});

}


// get product by id  
getProduct(idProduct : number):Observable<ApiRespone>{

  return this.http.get<ApiRespone>(this.url+"/manageProduct/"+idProduct,{headers:this.headers_bearer});

}


  // post product 
  postProduct(product : Product):Observable<ApiRespone>{
    
    return this.http.post<ApiRespone>(this.url+"/manageProduct",product,{headers:this.headers_bearer})

  }
  postProduct2(product : Product, file : File):Observable<ApiRespone>{
    
    const data = new FormData();
    data.append('name',product.name)
    data.append('price',product.price.toString())
    data.append('status',product.status?'true':'false')
    data.append('disscount',product.disscount.toString())
    data.append('description',product.description)
    data.append('idCategory',product.idCategory.toString())
    data.append('file',file)
    data.append('sizeS',product.sizeS.toString())
    data.append('sizeM',product.sizeM.toString())
    data.append('sizeL',product.sizeL.toString())
    data.append('sizeXL',product.sizeXL.toString())

    return this.http.post<ApiRespone>(this.url+"/manageProduct",data,{headers:this.headers_bearer})

  }

  // put product 
  putProduct(idProduct : number,product : Product, file : File):Observable<ApiRespone>{
    
    const data = new FormData();

    data.append('name',product.name)
    data.append('price',product.price.toString())
    data.append('status',product.status===true?"true":"false")
    data.append('disscount',product.disscount.toString())
    data.append('description',product.description)
    data.append('idCategory',product.idCategory.toString())
    data.append('file',file)
    data.append('sizeS',product.sizeS.toString())
    data.append('sizeM',product.sizeM.toString())
    data.append('sizeL',product.sizeL.toString())
    data.append('sizeXL',product.sizeXL.toString())

    return this.http.put<ApiRespone>(this.url+"/manageProduct/"+idProduct,data,{headers:this.headers_bearer})

  }

}
