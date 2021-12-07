import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { 
    path: 'department',
   component: DepartmentComponent ,
   data:['No_Admin'],
   canActivate:[AuthGuard]
   },

  {
     path: 'employee', 
     component: EmployeeComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent =[DepartmentComponent,EmployeeComponent];
