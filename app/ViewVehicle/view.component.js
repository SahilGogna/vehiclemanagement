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
var ViewDetail = (function () {
    function ViewDetail(_route) {
        this._route = _route;
    }
    ViewDetail.prototype.ngOnInit = function () {
        var id = this._route.snapshot.params['id'];
        var list = [];
        if (window.localStorage.getItem('my-data') != null) {
            list = JSON.parse(window.localStorage.getItem('my-data'));
        }
        this.regEntry = list.find(function (obj) { return obj.registrationNumber == id; });
        this.userfirstname = this.regEntry.userfirstname;
        this.userlastname = this.regEntry.userlastname;
        this.registrationNumber = this.regEntry.registrationNumber;
        this.address = this.regEntry.address;
        this.pickupdate = this.regEntry.pickupdate;
        this.returndate = this.regEntry.returndate;
    };
    return ViewDetail;
}());
ViewDetail = __decorate([
    core_1.Component({
        selector: 'view',
        templateUrl: './app/ViewVehicle/viewvehicle.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ViewDetail);
exports.ViewDetail = ViewDetail;
//# sourceMappingURL=view.component.js.map