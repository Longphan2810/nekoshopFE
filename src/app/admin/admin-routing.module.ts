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
import { RoleGuardService } from '../service/role-guard.service';


const routes: Routes = [
  {path : '' , component:UiadminComponent, 
  children:[
 
    {path : 'manageProduct', component: ManageproductComponent,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
    },
  
    {path : 'manageProduct/:id', component: ManageproductComponent ,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
   },

    {path : '', component: ManagecategoryComponent ,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
   },

    {path : 'manageOrder', component: ManageorderComponent ,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
   },

    {path : 'manageUsers', component: ManageuserComponent ,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
   },

    {path : 'listProduct', component: ListproductComponent ,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
   },

    {path : 'listOrder', component: ListorderComponent ,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
   },

    {path : 'listUsers', component: ListuserComponent ,
      canActivate :[RoleGuardService],data:{expectedRole:"ADMIN"}
   },
  ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
