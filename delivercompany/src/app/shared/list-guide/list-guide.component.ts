import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-guide',
  templateUrl: './list-guide.component.html',
  styleUrls: ['./list-guide.component.css']
})
export class ListGuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input() AddUrl:string;//url for adding certain elements


  @Input() FirstProperty:string;
  @Input() SecondProperty:string;
  @Input() ThirdProperty:string;
  @Input() FourthProperty:string;
  @Input() ObjectsName:string;// General name for Objects

  AddBtnClick(){
    window.location.href=this.AddUrl;
  }


}
