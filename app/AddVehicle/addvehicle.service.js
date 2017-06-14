"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddVehicleService = (function () {
    /**
     * service class to add new vehicle
     */
    function AddVehicleService() {
    }
    /**
     * this method takes all parameters as input and stores them in local storage
     */
    AddVehicleService.prototype.setVehicle = function (userfirstname, userlastname, registrationNumber, address, pickupdate, returndate) {
        var list = [];
        if (window.localStorage.getItem('my-data') != null) {
            list = JSON.parse(window.localStorage.getItem("my-data"));
        }
        list.push({ userfirstname: userfirstname, userlastname: userlastname, registrationNumber: registrationNumber, address: address, pickupdate: pickupdate, returndate: returndate });
        window.localStorage.setItem('my-data', JSON.stringify(list));
    };
    return AddVehicleService;
}());
AddVehicleService = __decorate([
    core_1.Injectable()
    /**
     * service class to add new vehicle
     */
], AddVehicleService);
exports.AddVehicleService = AddVehicleService;
//# sourceMappingURL=addvehicle.service.js.map