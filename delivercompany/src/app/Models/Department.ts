import { Region } from './Region';
import { Order } from './Order';
import { Invoice } from './Invoice';
import { Warehouse } from './Warehouse';
import { Car } from './Car';

export class Department{
    Id:number;
    Name:string;
    BankAccountNo:number;
    Street:string;
    BuildingNo:number;
    OfficeTelNo:string;
    ManagerTelNo:string;

    //complex types
    Cars:Car[];
    Warehouses:Warehouse[];
    Invoices:Invoice[];
    Orders:Order[];
    Regions:Region[];
    Workers:Worker[];
}