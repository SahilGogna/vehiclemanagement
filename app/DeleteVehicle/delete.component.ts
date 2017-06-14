import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {ActivatedRoute} from '@angular/router'
import {IVehicle} from '../VehicleList/IVehicle'

@Component({
templateUrl:'./app/DeleteVehicle/deletevehicle.component.html'
})
/**
 * this class manages deletion of vehicles
 */
export class DeleteVehicle{
    regEntry:IVehicle;
    mylist : Array<IVehicle>;

    constructor(private _route:ActivatedRoute,private _router:Router){
        this.delete();
    }

/**
 * this method is ivoked when user clicks delete button. Takes id from url and deletes the vehicle 
 * clicked
 */
    delete():void{
        let id = this._route.snapshot.params['id'];
        console.log(id+"======");
        let list: IVehicle[] = [];
        if (window.localStorage.getItem('my-data') != null) {
        list = JSON.parse(window.localStorage.getItem('my-data'));
        }
        this.mylist = list.filter(obj => obj.registrationNumber !== parseInt(id));
        window.localStorage.setItem("my-data", JSON.stringify(this.mylist));
        console.log(this.mylist);
       this._router.navigate(['/list']);
    }

}