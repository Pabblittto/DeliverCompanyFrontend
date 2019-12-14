import { Department } from './Department';

export class Car{
    registrationNumber:number;//PK
    vIN:number;
    mark:string;
    model:string;
    policyNumber:number;

    // complex types
    department:Department;
}