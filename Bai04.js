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
// Định nghĩa lớp Person là abstract class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // Phương thức in thông tin (sẽ được ghi đè ở lớp con)
    Person.prototype.displayInfo = function () {
        console.log("T\u00EAn: ".concat(this.name));
    };
    return Person;
}());
// Lớp Student kế thừa Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name) {
        var _this = _super.call(this, name) || this; // gọi constructor lớp cha
        _this.id = id;
        return _this;
    }
    // Ghi đè phương thức displayInfo()
    Student.prototype.displayInfo = function () {
        console.log("M\u00E3 SV: ".concat(this.id, ", T\u00EAn SV: ").concat(this.name));
    };
    return Student;
}(Person));
// Lớp Teacher kế thừa Person
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.subject = subject;
        return _this;
    }
    // Ghi đè phương thức displayInfo()
    Teacher.prototype.displayInfo = function () {
        console.log("T\u00EAn GV: ".concat(this.name, ", M\u00F4n d\u1EA1y: ").concat(this.subject));
    };
    return Teacher;
}(Person));
// Tạo đối tượng Student
var student = new Student("SV001", "Nguyễn Văn A");
student.displayInfo(); // Mã SV: SV001, Tên SV: Nguyễn Văn A
// Tạo đối tượng Teacher
var teacher = new Teacher("Trần Thị B", "Toán học");
teacher.displayInfo(); // Tên GV: Trần Thị B, Môn dạy: Toán học
