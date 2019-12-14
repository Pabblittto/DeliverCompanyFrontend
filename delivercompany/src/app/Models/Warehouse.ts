import { Department } from './Department';

export class Warehouse{
    Id:number;
    Street:string;
    HouseNumber:number;
    
    //complex objects
    department:Department;
}