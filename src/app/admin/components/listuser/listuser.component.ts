import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { UserResponse } from '../../../entity/user-response';
import { error } from 'console';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.css'
})
export class ListuserComponent implements OnInit{

  listUser = new Array<UserResponse>

  constructor(private userService : UserService){}

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(
      data =>{
        this.listUser=data.result
        console.log(data)
      }, error =>{
        console.log(error)
      }
    )

  }


}
