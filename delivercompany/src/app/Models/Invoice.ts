import { Department } from './Department';

export class Invoice{
    id:number;
    date:Date;
    description:string;
    filePath:string;

    //complex types
    department:Department;
}