import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fe_nekoShope';
  constructor(private cookieService: CookieService) {
   
  }
ngOnInit(): void {
  
}

}
