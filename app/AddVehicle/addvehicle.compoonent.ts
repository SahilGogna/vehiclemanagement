import {Component} from '@angular/core'
import {AddVehicleService} from './addvehicle.service'
import {Router} from '@angular/router'

@Component({
    
    templateUrl:'./app/AddVehicle/addvehicle.component.html',
    providers:[AddVehicleService]

})
/**
 * this component manages add new vehicle functionality
 */
export class AddVehicle{
    
    userfirstname:string;
    userlastname :string;
    registrationNumber :number;
    address: string;
    pickupdate :Date;
    returndate :Date;

    constructor(private _addservice:AddVehicleService,private _router:Router){

    }

    /**
     * this method handles submission of add new vehicle form and passes parameters to service method
     */
    public AddVehicle():void{
        this._addservice.setVehicle(this.userfirstname,this.userlastname,this.registrationNumber,this.address,this.pickupdate,this.returndate);
        this._router.navigate(['/list']);
    }
}