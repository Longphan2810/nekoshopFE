import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiInfoComponent } from './components/ui-info/ui-info.component';
import { InfoComponent } from './components/info/info.component';
import { LocationComponent } from './components/location/location.component';
import { ListorderComponent } from './components/listorder/listorder.component';
import { LocationCreateComponent } from './components/location-create/location-create.component';
import { LocationUpdateComponent } from './components/location-update/location-update.component';

const routes: Routes = [
  { path: '', component: UiInfoComponent ,
    children:[
    { path:'', component : InfoComponent},
    { path:'location', component : LocationComponent},
    { path:'listorder', component : ListorderComponent},
    { path:'locationCreate', component : LocationCreateComponent},
    { path:'locationUpdate', component : LocationUpdateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoUserRoutingModule { }

