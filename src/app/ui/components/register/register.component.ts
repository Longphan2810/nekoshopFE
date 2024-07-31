import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../service/register.service';
import { Userdto } from '../../../entity/userdto';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,private registerService : RegisterService){}

  register(){

    let use = new Userdto(this.registerForm.value.password,this.registerForm.value.confirmPassword,this.registerForm.value.email)
      console.log(use)
      console.log(this.registerForm.value.email)
    this.registerService.postRegister(use).subscribe(
      data=>{
        console.log(data)
        alert("Đã gửi mã xác nhận về mail, vui lòng kiểm tra !")
      }
      ,error=>{
        console.log(error)
        alert("Vui lòng thử email khác để đăng ký !")
      }
    )

  }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group(
      {email:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]],

      }
    )


  }

}
