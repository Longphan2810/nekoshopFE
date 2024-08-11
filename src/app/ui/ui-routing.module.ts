import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UiComponent } from './components/ui/ui.component';
import { ShopComponent } from './components/shop/shop.component';
import { DetailComponent } from './components/detail/detail.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { RoleGuardService } from '../service/role-guard.service';

const routes: Routes = [
  {
    path: '', component: UiComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
     
      { path: 'detail', component: DetailComponent },
      { path: 'shopCart', component: ShopingCartComponent , 
        canActivate:[RoleGuardService], data:{expectedRole :"USER"} },
      { path: 'checkOut', component: CheckOutComponent , 
        canActivate:[RoleGuardService], data:{expectedRole :'USER'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
