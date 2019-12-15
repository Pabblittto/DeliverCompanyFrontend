import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private MessageStream = new Subject<string>(); 

  constructor() { }

  SubscribeMessageStream():Subject<string>{
    return this.MessageStream;
  }

  AddMessage(message:string){
    this.MessageStream.next(message);
  }

  DisplayHttpErrors(httperror:HttpErrorResponse){
    // są dwa typy errowrow- od .neta i moje własne
    // struktura erroru dotneta:
    //errors:{
        //.. nazwy propertek [lista errorów]
    //}
    // moja struktura:
    // errors:[errorry w stringu w liście]
    
    const errorObject=httperror.error.errors;
    if(errorObject!=null){
      if(Array.isArray(errorObject)){// moje errory w postaci listy
        for(let i=0;i<errorObject.length;i++){
            this.MessageStream.next(errorObject[i]);
          }
      }
      else{// errory z .neta w postaci obiektu
        
        for(let property in errorObject){
          const list:string[]=errorObject[property];
          for(let listindex in list){
            this.MessageStream.next(list[listindex]);
          }
        }  

      }
    }
    else{
      console.log(httperror.error);
      this.MessageStream.next("Unknown error, check console.log");
    }

  }


}
