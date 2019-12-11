import { Region } from './Region';
import { Order } from './Order';
import { Invoice } from './Invoice';
import { Warehous } from './Warehous';
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
    Warehouses:Warehous[];
    Invoices:Invoice[];
    Orders:Order[];
    Regions:Region[];
    Workers:Worker[];
}