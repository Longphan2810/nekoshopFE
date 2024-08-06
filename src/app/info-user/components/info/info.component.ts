import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { UserResponse } from '../../../entity/user-response';
import { LoginService } from '../../../service/login.service';
import { error } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements  OnInit {

  userResponse !: UserResponse

  formBuilder = new FormBuilder;
  form  !: FormGroup

  constructor(private userService : UserService ){}

  capNhat(){
    this.userResponse.name = this.form.value['name'],
    this.userResponse.birthday = this.form.value['birthday'],
    this.userResponse.gender = this.form.value['gender'],
    this.userResponse.phone = this.form.value['phone'],
    this.userResponse.location = this.form.value['location']
    this.userService.postUser(this.userResponse).subscribe(
      data=>{
        alert("Cap Nhat Thanh Cong !")
        console.log(this.userResponse)
      },
      error =>{
        alert("Khong Thanh Cong")
      }
    )

  }

ngOnInit(): void {
  
  

  this.userService.getUserByEmail(LoginService.emailUser).subscribe(
  
    data => {
      console.log(data.result)
      this.userResponse = data.result
      this.form = this.formBuilder.group(
        {
          name :[this.userResponse.name,Validators.required], 
          birthday :[this.userResponse.birthday,Validators.required],
          gender:[this.userResponse.gender,Validators.required],
          phone:[this.userResponse.phone,Validators.required],
          location:[this.userResponse.location,Validators.required]
    
        }
    
      )
      


    },
    error =>  {
      // console.log(error); 

    }
  
  )



}

}
