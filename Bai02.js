var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle(name, speed, id) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    vehicle.prototype.slowDown = function (tocdocangiam) {
        if (this.speed - tocdocangiam < 0) {
            this.speed = 0;
        }
        else {
            this.speed = this.speed - tocdocangiam;
        }
    };
    // this.speed : ví (tiền trong ví )
    //tocdocantang : số tiền cho theem vào
    vehicle.prototype.speedUp = function (tocdocantang) {
        this.speed = this.speed + tocdocantang;
    };
    vehicle.prototype.showSpeed = function () {
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.speed));
    };
    return vehicle;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(gear, name, speed, id) {
        var _this = _super.call(this, name, speed, id) || this;
        _this.gear = gear;
        return _this;
    }
    Bicycle.prototype.showInfo = function () {
        console.log(this.gear);
    };
    return Bicycle;
}(vehicle));
var bike = new Bicycle(6, "Mountain Bike", 15, 101);
bike.showSpeed(); // 101 Mountain Bike 15
bike.speedUp(5);
bike.showSpeed(); // 101 Mountain Bike 20
