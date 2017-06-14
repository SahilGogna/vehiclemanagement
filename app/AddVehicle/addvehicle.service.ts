import {Injectable} from '@angular/core'
import {IVehicle} from '../VehicleList/IVehicle'

@Injectable()
/**
 * service class to add new vehicle 
 */
export class AddVehicleService{
    
    /**
     * this method takes all parameters as input and stores them in local storage 
     */
    setVehicle(userfirstname:string, userlastname :string,registrationNumber :number,address: string,pickupdate :Date,
    returndate :Date):void{
        let list:IVehicle[]=[];
        if(window.localStorage.getItem('my-data')!=null){
            list=JSON.parse(window.localStorage.getItem("my-data"));
        }
        list.push({userfirstname,userlastname,registrationNumber,address,pickupdate,returndate});
        window.localStorage.setItem('my-data',JSON.stringify(list));
    }
}