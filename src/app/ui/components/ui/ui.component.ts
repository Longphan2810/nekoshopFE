import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  categorys = new Array();
  loggedIn = false;

  constructor(private cateService: CategoryService, public loginService: LoginService) {}

  getLogout() {
    this.loginService.getLogout();
    this.loggedIn = this.loginService.getLoggedin(); 
  }

  getCategorys() {
    this.cateService.getListCate().subscribe(
      data => { this.categorys = data.result; }
    );
  }

  ngOnInit(): void {
    this.getCategorys()
    this.loggedIn = LoginService.loggedin
  }
}
