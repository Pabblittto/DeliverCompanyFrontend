import { Pack } from './Pack';

export class PackType{
    name:string;//PK
    minWeight:number;
    maxWeight:number;
    price:number;
    
    // complex types
    packs:Pack[];
}