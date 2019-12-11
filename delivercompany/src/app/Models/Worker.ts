import { Contract } from './Contract';
import { Department } from './Department';

export class Worker{
    Id:number;
    Name:string;
    Surname:string;
    

    //complex types
    Contracts:Contract[];
    position:Position;
    department:Department;
}