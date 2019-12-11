import { Order } from './Order';

export class Person{
    Id:number;
    Name:string;
    Surname:string;
    City:string;
    Street:string;
    BuildingNo:number;
    TelNo:string;

    //complex types
    BeeingSender:Order[];// jakich paczej jest nadawcą
    BeeingReceiver:Order[];// jakich paczek jest odbiorca

}