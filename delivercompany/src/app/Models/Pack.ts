import { Order } from './Order';
import { PackType } from './PackType';

export class Pack{
    id:number;
    weight:number;
    height:number;


    //complex object
    type:PackType;
    order:Order;

}