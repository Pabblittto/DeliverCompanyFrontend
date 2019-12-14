import { HttpClient } from '@angular/common/http';
import { ConnectionService } from './../services/connection/connection.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListElementComponent } from './list-element/list-element.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { ListGuideComponent } from './list-guide/list-guide.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListElementComponent, PaginationBarComponent, ListGuideComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListElementComponent,ListGuideComponent,PaginationBarComponent,FormsModule],
  providers:[]
})
export class SharedModule { }
