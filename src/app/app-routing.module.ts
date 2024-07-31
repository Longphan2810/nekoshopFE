import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/components/login/login.component';
import { RegisterComponent } from './ui/components/register/register.component';
import { VerifyRegisterComponent } from './ui/components/verify-register/verify-register.component';


const routes: Routes = [
  { path:  'user/login',component: LoginComponent},
  { path:  'user/register',component: RegisterComponent},
  { path:  'user/verifyRegister',component: VerifyRegisterComponent},
  { path: '', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'infoUser', loadChildren: () => import('./info-user/info-user.module').then(m => m.InfoUserModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
