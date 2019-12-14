import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'departments',
    loadChildren:'./departments/departments.module#DepartmentsModule'
  },
  {
    path:'',
    loadChildren:'./departments/departments.module#DepartmentsModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
