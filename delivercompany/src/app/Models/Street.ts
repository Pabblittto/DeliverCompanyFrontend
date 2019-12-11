import { ParcelLocker } from './ParcelLocker';
import { Region } from './Region';

export class Street{
    Id:number;
    StreetName:string;


    //complex types
    region:Region;
    parcelLockers:ParcelLocker[];

}