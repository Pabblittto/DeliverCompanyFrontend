import { Department } from './Department';

export class Warehouse{
    id:number;
    street:string;
    houseNumber:number;
    
    //complex objects
    department:Department;
}