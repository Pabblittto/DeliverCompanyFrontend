import { DepartmentsRoutes } from './departments.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [DetailComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DepartmentsRoutes)
  ]
})
export class DepartmentsModule { }
