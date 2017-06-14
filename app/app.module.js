"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var addvehicle_compoonent_1 = require("./Addvehicle/addvehicle.compoonent");
var addvehicle_service_1 = require("./AddVehicle/addvehicle.service");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var view_component_1 = require("./ViewVehicle/view.component");
var delete_component_1 = require("./DeleteVehicle/delete.component");
var list_component_1 = require("./VehicleList/list.component");
/**
 * this decorator is compulsory to define a class as module
 */
var AppModule = (function () {
    /**
     * this is the main and only module of application that contains all the components of application,routing paths
     * services and defines the stating component of application
     */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'add', component: addvehicle_compoonent_1.AddVehicle },
                { path: 'vehicle/:id', component: view_component_1.ViewDetail },
                { path: 'deletevehicle/:id', component: delete_component_1.DeleteVehicle },
                { path: 'list', component: list_component_1.ListComponent },
                { path: '', redirectTo: 'list', pathMatch: 'full' },
                { path: '**', redirectTo: 'list', pathMatch: 'full' }
            ])],
        declarations: [app_component_1.AppComponent, list_component_1.ListComponent, addvehicle_compoonent_1.AddVehicle, view_component_1.ViewDetail, delete_component_1.DeleteVehicle],
        providers: [addvehicle_service_1.AddVehicleService],
        bootstrap: [app_component_1.AppComponent]
    })
    /**
     * this is the main and only module of application that contains all the components of application,routing paths
     * services and defines the stating component of application
     */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map