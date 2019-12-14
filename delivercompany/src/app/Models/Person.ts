import { Order } from './Order';

export class Person{
    id:number;
    name:string;
    surname:string;
    city:string;
    street:string;
    buildingNo:number;
    telNo:string;

    //complex types
    beeingSender:Order[];// jakich paczej jest nadawcą
    beeingReceiver:Order[];// jakich paczek jest odbiorca

}