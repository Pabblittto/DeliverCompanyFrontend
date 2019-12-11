import { Street } from './Street';
import { Department } from './Department';

export class Region{
    Id:number;
    CityName:string;

    //complex types
    department:Department;
    streets:Street[];
}