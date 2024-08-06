import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { AuthenRequest } from '../../../entity/authen-request';
import { CookieService } from 'ngx-cookie-service';
import { AuthenRespone } from '../../../entity/authen-respone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formBuilder = new FormBuilder()
  formLogin !: FormGroup;

  constructor(private route: ActivatedRoute, private loginService: LoginService, private cookieService: CookieService) { }

  // login  
  getLogin() {
    if (this.formLogin.value['email'] != "" && this.formLogin.value['email'] != "") {
      let authen = new AuthenRequest(this.formLogin.value['email'], this.formLogin.value['password']);
      this.loginService.postLogin(authen).subscribe(
        data => {
          console.log(data)
          let authenRespone: AuthenRespone = data.result;
          this.loginService.setLoggedin(true);
          window.location.assign("/");
          this.cookieService.set("jtoken",authenRespone.token,1,"/")
          this.cookieService.set("email",this.formLogin.value['email'],1,"/")
          console.log(this.loginService.getLoggedin())
        },
        error => {
          let codeError = error.error.code;
          console.log(error)
          switch (codeError) {
            case 1401:
              alert("User không tồn tại !")
              break;
            case 1402:
              alert("User Đã bị khoá !")
              break;
            case 1403:
              alert("User cần xác thực trước khi đăng nhập !")
              break;
            case 1404:
              alert("Sai mật khẩu!")
              break;

            default:
              break;
          }

        }
      )

    }
  }


  

  ngOnInit(): void {

    const token = this.cookieService.get('email');
    console.log("token :" + token); 

    
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]

    })
   

  }
 
}




