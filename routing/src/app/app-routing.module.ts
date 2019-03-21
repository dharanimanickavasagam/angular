import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';


const routes: Routes =
 [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentlistComponent},
  { path: 'employees', component: EmployeelistComponent},
  { path: 'departments/:id', component: DepartmentdetailComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentlistComponent, EmployeelistComponent, PagenotfoundComponent, DepartmentdetailComponent];
