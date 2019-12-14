import { HttpErrorResponse } from '@angular/common/http';
import { Department } from './../../Models/Department';
import { ConnectionService } from './../../services/connection/connection.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import Settings from '../../Settings.json';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private connection:ConnectionService, private location:Location) { }

  ngOnInit() {
  }

  NewDepartment:Department= new Department();

  BackBtnClick(){
    this.location.back();
  }

  AddBtnClick(){
    this.connection.addCertainElement<Department>(Settings.Departments,this.NewDepartment).subscribe(
      res=>{
        console.log(res);
        window.location.href="departments/list/1"
      },
      (err:HttpErrorResponse)=>{
        console.log(err);
      }
    )
  }


}
