import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiadminComponent } from './components/uiadmin/uiadmin.component';
import { ManageproductComponent } from './components/manageproduct/manageproduct.component';
import { ManagecategoryComponent } from './components/managecategory/managecategory.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { ManageorderComponent } from './components/manageorder/manageorder.component';
import { ListorderComponent } from './components/listorder/listorder.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ListuserComponent } from './components/listuser/listuser.component';

const routes: Routes = [
  {path : '' , component:UiadminComponent, 
  children:[
    {path : 'manageProduct', component: ManageproductComponent},
  
    {path : '', component: ManagecategoryComponent},

    {path : 'manageOrder', component: ManageorderComponent},

    {path : 'manageUsers', component: ManageuserComponent},

    {path : 'listProduct', component: ListproductComponent},

    {path : 'listOrder', component: ListorderComponent},

    {path : 'listUsers', component: ListuserComponent},
  ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
