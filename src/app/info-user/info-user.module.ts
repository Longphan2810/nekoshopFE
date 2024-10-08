import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoUserRoutingModule } from './info-user-routing.module';

import { UiInfoComponent } from './components/ui-info/ui-info.component';
import { LocationComponent } from './components/location/location.component';
import { ListorderComponent } from './components/listorder/listorder.component';
import { LocationUpdateComponent } from './components/location-update/location-update.component';
import { LocationCreateComponent } from './components/location-create/location-create.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';
import { InfoComponent } from './components/info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UiInfoComponent,
    LocationComponent,
    ListorderComponent,
    LocationUpdateComponent,
    LocationCreateComponent,
    DetailOrderComponent,
    InfoComponent

  ],
  imports: [
    CommonModule,
    InfoUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class InfoUserModule { }
