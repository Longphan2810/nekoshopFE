import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { Userdto } from '../entity/userdto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:8080/api"

  constructor(private http : HttpClient) { }

  // post register  
  postRegister(Userdto : Userdto):Observable<ApiRespone>{

    return this.http.post<ApiRespone>(this.url+"/register",Userdto);
  }

  // get confirm  acc
  getConfirm(token : string):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/ConfirmAccount/"+token)
  }

}
