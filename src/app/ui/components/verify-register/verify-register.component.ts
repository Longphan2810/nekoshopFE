import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-verify-register',
  templateUrl: './verify-register.component.html',
  styleUrl: './verify-register.component.css'
})
export class VerifyRegisterComponent implements OnInit {

  formbuilder = new FormBuilder()
  verifyForm !: FormGroup;

  constructor(private registerService : RegisterService){}

  getVerify(){
    this.registerService.getConfirm(this.verifyForm.value['codeVerify']).subscribe(
      data=> {
        alert("Đã xác minh thành công !")
        window.location.assign("user/login")
      },
      error=>{
        console.log(error)
      }

    )
  }

  ngOnInit(): void {
    
    this.verifyForm = this.formbuilder.group(
      {codeVerify:["",Validators.required]}
    )

  }


}
