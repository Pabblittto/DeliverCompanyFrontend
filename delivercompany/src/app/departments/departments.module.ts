import { HttpClient } from '@angular/common/http';
import { ConnectionService } from './../services/connection/connection.service';
import { SharedModule } from './../shared/shared.module';
import { DepartmentsRoutes } from './departments.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [ ListComponent, DetailsComponent, EditComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DepartmentsRoutes)
  ],
  providers:[ConnectionService]
})
export class DepartmentsModule { }
