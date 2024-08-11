import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UiadminComponent } from './components/uiadmin/uiadmin.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { ListorderComponent } from './components/listorder/listorder.component';
import { ListcategoryComponent } from './components/listcategory/listcategory.component';
import { ManagecategoryComponent } from './components/managecategory/managecategory.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ManageorderComponent } from './components/manageorder/manageorder.component';
import { ManageproductComponent } from './components/manageproduct/manageproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginAdminComponent } from './login-admin/login-admin.component';



@NgModule({
  declarations: [
    UiadminComponent,
    ListuserComponent,
    ListproductComponent,
    ListorderComponent,
    ListcategoryComponent,
    ManagecategoryComponent,
    ManageuserComponent,
    ManageorderComponent,
    ManageproductComponent,
    LoginAdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
