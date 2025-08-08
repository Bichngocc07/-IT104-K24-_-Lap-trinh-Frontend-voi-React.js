var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.printInfo = function () {
        console.log("T\u00EAn: ".concat(this.name, ", N\u0103m s\u1EA3n xu\u1EA5t: ").concat(this.year, ", H\u00E3ng: ").concat(this.company));
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("Civic", 2020, "Honda");
var vehicle2 = new Vehicle("Model S", 2022, "Tesla");
vehicle1.printInfo();
vehicle2.printInfo();
