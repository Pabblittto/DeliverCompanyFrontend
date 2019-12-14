import { Contract } from './Contract';
import { Department } from './Department';

export class Worker{
    id:number;
    name:string;
    surname:string;
    

    //complex types
    contracts:Contract[];
    position:Position;
    department:Department;
}