import { Chamber } from './Chamber';

export class ChamberType{
    TypeName:string;
    Height:number;
    Width:number;

    //complex types
    chambers:Chamber[];
}