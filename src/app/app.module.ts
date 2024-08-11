import { inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  const platformId = inject(PLATFORM_ID);
  const cookieService = new CookieService(document, platformId);
  return cookieService.get('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["example.com/examplebadroute/"]
      },
    }),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
