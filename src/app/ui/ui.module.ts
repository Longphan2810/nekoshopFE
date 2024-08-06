import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './components/ui/ui.component';
import { ShopComponent } from './components/shop/shop.component';
import { DetailComponent } from './components/detail/detail.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyRegisterComponent } from './components/verify-register/verify-register.component';

@NgModule({
  declarations: [
    UiComponent,
    HomeComponent,
    ProductComponent,
    ShopComponent,
    DetailComponent,
    ShopingCartComponent,
    CheckOutComponent,
    LoginComponent,
    RegisterComponent,
    VerifyRegisterComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UiModule { }
