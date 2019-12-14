import { HttpClient } from '@angular/common/http';
import { ConnectionService } from './../services/connection/connection.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListElementComponent } from './list-element/list-element.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';



@NgModule({
  declarations: [ListElementComponent, PaginationBarComponent],
  imports: [
    CommonModule
  ],
  exports:[ListElementComponent],
  providers:[]
})
export class SharedModule { }
