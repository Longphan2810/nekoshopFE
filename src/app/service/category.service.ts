import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiRespone } from '../entity/api-respone';
import { Category } from '../entity/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }

  // get all list cate
  getListCate(): Observable<ApiRespone> {

    return this.http.get<ApiRespone>(this.url + "/category")

  }
  // get cate by id 
  getListCateByName(nameCategory: String): Observable<ApiRespone> {

    return this.http.get<ApiRespone>(this.url + "/category/" + nameCategory)

  }

  // post cate
  postCate(cate: Category): Observable<ApiRespone> {

    return this.http.post<ApiRespone>(this.url + "/category", cate)

  }

  // post cate
  putCate(cate: Category): Observable<ApiRespone> {

    console.log(cate)
    return this.http.put<ApiRespone>(this.url + "/category/" + cate.idCategory, cate)

  }

  // delete cate 
  deleleCate(idCategory: number): Observable<ApiRespone> {
    return this.http.delete<ApiRespone>(this.url + "/category/" + idCategory)
  }



}
