import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AddVehicle} from './Addvehicle/addvehicle.compoonent'
import {AddVehicleService} from './AddVehicle/addvehicle.service'
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ViewDetail} from './ViewVehicle/view.component'
import {DeleteVehicle} from './DeleteVehicle/delete.component'

import {ListComponent} from './VehicleList/list.component';

/**
 * this decorator is compulsory to define a class as module
 */
@NgModule({
  imports: [ BrowserModule ,FormsModule,
  RouterModule.forRoot([
     {path:'add',component:AddVehicle},
     {path:'vehicle/:id',component:ViewDetail},
     {path:'deletevehicle/:id',component:DeleteVehicle},
     {path:'list',component:ListComponent},
     {path:'',redirectTo:'list',pathMatch:'full'},
     {path:'**',redirectTo:'list',pathMatch:'full'}
   ])],
  declarations: [ AppComponent ,ListComponent, AddVehicle, ViewDetail,DeleteVehicle],
  providers:[AddVehicleService],
  bootstrap: [ AppComponent ]
})
/**
 * this is the main and only module of application that contains all the components of application,routing paths
 * services and defines the stating component of application
 */
export class AppModule { }
