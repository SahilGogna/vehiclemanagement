import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IVehicle} from '../VehicleList/IVehicle'

@Component({
    selector:'view',
  templateUrl: './app/ViewVehicle/viewvehicle.component.html'
})
export class ViewDetail{
  regEntry:IVehicle;

  userfirstname:string;
  userlastname :string;
  registrationNumber :number;
  address: string;
  pickupdate :Date;
  returndate :Date;


constructor(private _route:ActivatedRoute){}

ngOnInit():void{
        let id = this._route.snapshot.params['id'];
        let list: IVehicle[] = [];
        if (window.localStorage.getItem('my-data') != null) {
        list = JSON.parse(window.localStorage.getItem('my-data'));
        }
        this.regEntry = list.find(obj=> obj.registrationNumber==id);
        this.userfirstname=this.regEntry.userfirstname;
        this.userlastname=this.regEntry.userlastname;
        this.registrationNumber=this.regEntry.registrationNumber;
        this.address=this.regEntry.address;
        this.pickupdate=this.regEntry.pickupdate;
        this.returndate=this.regEntry.returndate;
} 

}
