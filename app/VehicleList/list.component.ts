import {Component} from '@angular/core'
import {IVehicle} from './IVehicle'

@Component({
selector:'list',
moduleId:module.id,
templateUrl:'vehicleList.component.html'
})
/**
 * this component manages the list view at the starting of application
 */
export class ListComponent{
pageTitle:string ='Vehicle List';

vehicles:IVehicle[]=[];
constructor(){
this.vehicles=JSON.parse(window.localStorage.getItem("my-data"));
}
populateList():void{
    debugger;   
}

undo():void{

    }
}