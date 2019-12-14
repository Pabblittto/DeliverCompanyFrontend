import { SharedModule } from './../shared/shared.module';
import { DepartmentsRoutes } from './departments.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [ ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DepartmentsRoutes)
  ]
})
export class DepartmentsModule { }
