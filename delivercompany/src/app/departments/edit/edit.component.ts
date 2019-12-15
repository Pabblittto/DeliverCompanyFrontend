import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConnectionService } from './../../services/connection/connection.service';
import { Department } from './../../Models/Department';
import { Component, OnInit } from '@angular/core';
import Settings from '../../Settings.json';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private connection:ConnectionService, 
    private location:Location,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.Id=parseInt(params.get('id'));
      if(Number.isNaN(this.Id)){
        window.location.href='departments/list/1';
      }
      else{// download Certain department
        this.connection.getCertainElement<Department>(Settings.Departments,this.Id).subscribe(
          res=>{
            this.EditDepartment=res;
          },
          (err:HttpErrorResponse)=>{
            alert(err);
          }
        )
      }
    })
  }

  Id:number;// id od department
  EditDepartment:Department;


  BackBtnClick(){
    this.location.back();
  }

  EditBtnClick(){

  }
}
