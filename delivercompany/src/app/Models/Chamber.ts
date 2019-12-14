import { ChamberType } from './ChamberType';
import { ParcelLocker } from './ParcelLocker';

export class Chamber{
    amount:number;// amount of all chambers 
    freeAmount:number;// amount of free chambers

    //complex types
    parcelLocker:ParcelLocker;
    chamberType:ChamberType;
}