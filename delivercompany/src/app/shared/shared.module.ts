import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListElementComponent } from './list-element/list-element.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';



@NgModule({
  declarations: [ListElementComponent, PaginationBarComponent],
  imports: [
    CommonModule
  ],
  exports:[ListElementComponent]
})
export class SharedModule { }
