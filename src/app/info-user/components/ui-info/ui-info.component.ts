import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-ui-info',
  templateUrl: './ui-info.component.html',
  styleUrl: './ui-info.component.css'
})
export class UiInfoComponent {
  loggedIn = false;
  constructor( public loginService: LoginService) {}

  getLogout() {
    this.loginService.getLogout();
    this.loggedIn = this.loginService.getLoggedin(); 
  }

  ngOnInit(): void {
    
    this.loggedIn = LoginService.loggedin
  }

}
