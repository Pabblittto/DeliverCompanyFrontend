import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  @Input() Id:string|number;// this is not displayed
  @Input() FirstData: string|number="";
  @Input() SecondData: string|number="";
  @Input() ThirdData: string|number="";
  @Input() FourthData: string|number="";

  @Input() EditUrl:string;//Url to application page for editing element
  @Input() DetailsUrl:string;//Url to application page for Displaying Details

  @Input() DeleteUrl:string // URL FOR DELETING ELEMENT ON SERVER
  

  editBtnClick(){

  }

  detailsBtnClick(){
    
  }

  deleteBtnClick(){

  }

}
