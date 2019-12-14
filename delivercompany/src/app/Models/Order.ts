import { Person } from './Person';
import { Department } from './Department';
import { Pack } from './Pack';

export class Order{
    id:number;
    state:string;

    //complex types
    pack:Pack;
    department:Department;
    sender:Person;
    receiver:Person;
    
}