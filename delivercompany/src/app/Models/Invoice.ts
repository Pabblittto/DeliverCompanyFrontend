import { Department } from './Department';

export class Invoice{
    Id:number;
    Date:Date;
    Description:string;
    FilePath:string;

    //complex types
    department:Department;
}