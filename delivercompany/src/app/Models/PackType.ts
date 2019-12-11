import { Pack } from './Pack';

export class PackType{
    Name:string;//PK
    MinWeight:number;
    MaxWeight:number;
    Price:number;
    
    // complex types
    packs:Pack[];
}