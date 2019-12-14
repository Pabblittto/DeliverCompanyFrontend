import { ParcelLocker } from './ParcelLocker';
import { Region } from './Region';

export class Street{
    id:number;
    streetName:string;


    //complex types
    region:Region;
    parcelLockers:ParcelLocker[];

}