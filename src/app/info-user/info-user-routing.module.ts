import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiInfoComponent } from './components/ui-info/ui-info.component';
import { InfoComponent } from './components/info/info.component';
import { LocationComponent } from './components/location/location.component';
import { ListorderComponent } from './components/listorder/listorder.component';
import { LocationCreateComponent } from './components/location-create/location-create.component';
import { LocationUpdateComponent } from './components/location-update/location-update.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';
import { RoleGuardService } from '../service/role-guard.service';

const routes: Routes = [
  { path: '', component: UiInfoComponent ,
    children:[
    { path:'', component : InfoComponent,
      canActivate:[RoleGuardService], data:{expectedRole :'USER'}},
    { path:'location', component : LocationComponent , 
      canActivate:[RoleGuardService], data:{expectedRole :'USER'}},
    { path:'listorder', component : ListorderComponent , 
      canActivate:[RoleGuardService], data:{expectedRole :'USER'}},
    { path:'orderDetail', component : DetailOrderComponent , 
      canActivate:[RoleGuardService], data:{expectedRole :'USER'}},
    { path:'locationCreate', component : LocationCreateComponent , 
      canActivate:[RoleGuardService], data:{expectedRole :'USER'}},
    { path:'locationUpdate', component : LocationUpdateComponent, 
      canActivate:[RoleGuardService], data:{expectedRole :'USER'}},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoUserRoutingModule { }

