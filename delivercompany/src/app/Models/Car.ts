import { Department } from './Department';

export class Car{
    RegistrationNumber:number;//PK
    VIN:number;
    Mark:string;
    Model:string;
    PolicyNumber:number;

    // complex types
    Department:Department;
}