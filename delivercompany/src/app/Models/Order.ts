import { Person } from './Person';
import { Department } from './Department';
import { Pack } from './Pack';

export class Order{
    Id:number;
    State:string;

    //complex types
    pack:Pack;
    department:Department;
    sender:Person;
    Receiver:Person;
    
}