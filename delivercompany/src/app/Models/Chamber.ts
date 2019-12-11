import { ChamberType } from './ChamberType';
import { ParcelLocker } from './ParcelLocker';

export class Chamber{
    Amount:number;// amount of all chambers 
    FreeAmount:number;// amount of free chambers

    //complex types
    parcelLocker:ParcelLocker;
    chamberType:ChamberType;
}