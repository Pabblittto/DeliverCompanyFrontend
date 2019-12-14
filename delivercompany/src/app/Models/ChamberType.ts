import { Chamber } from './Chamber';

export class ChamberType{
    typeName:string;
    height:number;
    width:number;

    //complex types
    chambers:Chamber[];
}