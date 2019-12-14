import { Street } from './Street';
import { Department } from './Department';

export class Region{
    id:number;
    cityName:string;

    //complex types
    department:Department;
    streets:Street[];
}