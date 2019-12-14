import { ConnectionService } from './../../services/connection/connection.service';
import { Department } from './../../Models/Department';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Settings from '../../Settings.json';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route:ActivatedRoute, private connection:ConnectionService) {
    
   }
   ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.page=parseInt(params.get('page'));
      if(Number.isNaN(this.page)){
        this.WrongParamUrl();
        window.location.href='departments/list/1';
      }
      else{
        this.UpdateDepartmentList(this.page);
      }
    })
  }
  page:number;
  DepartmentList:Department[];
  numberOfPages:number;// number of all pages

  EditUrl:string="departments/edit/";
  DetailsUrl:string="departments/details/";
  DeleteUrl:string=Settings.Departments;
  AddUrl:string="departments/add";
  

  WrongParamUrl():void{
    console.log("wysłana wartość jest NaN !!!!!");
  }

  UpdatePaginationButtons():void{
    // podświetlenie konkretnego przycisku + edytowanie jego ilośći
    // kurwa jebać
  }


  UpdateDepartmentList(page:number):void{// when user change page
    this.connection.getListOfElements<Department>(Settings.Departments,this.page,Settings.PageElements).subscribe(
      res=>{
        this.DepartmentList=[...res]
        console.log(this.DepartmentList);
        
      },
      (err:HttpErrorResponse)=>{
        console.log(err.status);
      }
    )
  }

}
