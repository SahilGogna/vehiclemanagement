"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var DeleteVehicle = (function () {
    function DeleteVehicle(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.delete();
    }
    /**
     * this method is ivoked when user clicks delete button. Takes id from url and deletes the vehicle
     * clicked
     */
    DeleteVehicle.prototype.delete = function () {
        var id = this._route.snapshot.params['id'];
        console.log(id + "======");
        var list = [];
        if (window.localStorage.getItem('my-data') != null) {
            list = JSON.parse(window.localStorage.getItem('my-data'));
        }
        this.mylist = list.filter(function (obj) { return obj.registrationNumber !== parseInt(id); });
        window.localStorage.setItem("my-data", JSON.stringify(this.mylist));
        console.log(this.mylist);
        this._router.navigate(['/list']);
    };
    return DeleteVehicle;
}());
DeleteVehicle = __decorate([
    core_1.Component({
        templateUrl: './app/DeleteVehicle/deletevehicle.component.html'
    })
    /**
     * this class manages deletion of vehicles
     */
    ,
    __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.Router])
], DeleteVehicle);
exports.DeleteVehicle = DeleteVehicle;
//# sourceMappingURL=delete.component.js.map