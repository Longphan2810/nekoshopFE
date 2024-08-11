import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserResponse } from '../../../entity/user-response';
import { error } from 'console';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrl: './manageuser.component.css'
})
export class ManageuserComponent implements OnInit{

idUser !: number;
userCurrent !: UserResponse;

constructor(private userService : UserService,private route: ActivatedRoute){}



ngOnInit(): void {
  
this.route.queryParams.subscribe(
  params => {
    if(params["idUser"]){
      this.idUser = params["idUser"]
      this.userService.getUserById(this.idUser).subscribe(
        data => {this.userCurrent = data.result
                console.log(this.userCurrent)
        } , error =>{
          console.log(error)
        }


      )



    }



  }
)

}

}
