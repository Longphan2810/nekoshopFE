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

@NgModule({
  declarations: [
    UiComponent,
    HomeComponent,
    ProductComponent,
    ShopComponent,
    DetailComponent,
    ShopingCartComponent,
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
