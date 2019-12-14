import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import Settings from '../../Settings.json';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http:HttpClient) { }

  getAmountofElements(url:string):Observable<number>{
    let finalUrl= `${Settings.BaseServerUrl}+'/'+${url}`
    return this.http.get<number>(finalUrl);
  }

  getCertainElement<T>(url:string,PK:any):Observable<T>{// function for returning certain object in any 
    let tmp:string;
    if(url.slice(-1)=='/')
      tmp=url +PK;
    else
      tmp=url+'/'+PK;
    
    let finalUrl=`${Settings.BaseServerUrl}+'/'+${tmp}`; 

    return this.http.get<T>(finalUrl);
  }

  getListOfElements<T>(url:string,page:number,amount:number):Observable<T[]>{
    let tmp:string;

    if(url.slice(-1)=='/')
      tmp=url+`am=${amount}/pg=${page}`;
    else  
      tmp=url+ `/am=${amount}/pg=${page}`;

      let finalUrl=`${Settings.BaseServerUrl}+'/'+${tmp}`; 

    return this.http.get<T[]>(finalUrl);
  }

  updateCertainElement<T>(url:string,obiect:T,PK:any):Observable<any>{
    let tmp:string;

    if(url.slice(-1)=='/')
      tmp=url+`${PK};
    else`
      tmp=url+`/${PK}`

      let finalUrl=`${Settings.BaseServerUrl}+'/'+${tmp}`; 

      return this.http.patch<any>(finalUrl,obiect)
  }

  deleteCertainElement(url:string,PK:any):Observable<any>{
    let tmp:string;
    if(url.slice(-1)=='/')
      tmp=url+PK;
    else
      tmp=url+`/${PK}`;

      let finalUrl=`${Settings.BaseServerUrl}+'/'+${tmp}`; 

    return this.http.delete<any>(finalUrl);
  }

  addCertainElement<T>(url:string,PK:any,object:T):Observable<string[]>{
    let tmp;
    if(url.slice(-1)=='/')
      tmp=url+PK;
    else
      tmp=url+`/${PK}`;
    
      let finalUrl=`${Settings.BaseServerUrl}+'/'+${tmp}`; 

    return this.http.post<string[]>(finalUrl,object);
  }




}
