import { Order } from './Order';
import { PackType } from './PackType';

export class Pack{
    Id:number;
    Weight:number;
    Height:number;


    //complex object
    type:PackType;
    order:Order;

}