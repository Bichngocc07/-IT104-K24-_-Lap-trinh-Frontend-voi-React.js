var Vehicle = /** @class */ (function () {
    function Vehicle(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    Vehicle.prototype.printInfo = function () {
        console.log("ID: ".concat(this.id));
        console.log("T\u00EAn: ".concat(this.name));
        console.log("N\u0103m s\u1EA3n xu\u1EA5t: ".concat(this.year));
        console.log("H\u00E3ng: ".concat(this.company));
    };
    return Vehicle;
}());

var vehicle1 = new Vehicle(1, "Civic", 2020, "Honda");

vehicle1.printInfo();

console.log(vehicle1.name); 
