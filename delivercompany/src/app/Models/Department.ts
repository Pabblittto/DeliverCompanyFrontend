import { Region } from './Region';
import { Order } from './Order';
import { Invoice } from './Invoice';
import { Warehouse } from './Warehouse';
import { Car } from './Car';

export class Department{
    id:number;
    name:string;
    bankAccountNo:number;
    street:string;
    buildingNo:number;
    officeTelNo:string;
    managerTelNo:string;

    //complex types
    cars:Car[];
    warehouses:Warehouse[];
    invoices:Invoice[];
    orders:Order[];
    regions:Region[];
    workers:Worker[];
}