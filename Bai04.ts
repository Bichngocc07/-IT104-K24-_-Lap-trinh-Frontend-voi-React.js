// Định nghĩa lớp Person là abstract class
abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức in thông tin (sẽ được ghi đè ở lớp con)
    displayInfo(): void {
        console.log(`Tên: ${this.name}`);
    }
}

// Lớp Student kế thừa Person
class Student extends Person {
    public id: string;

    constructor(id: string, name: string) {
        super(name); // gọi constructor lớp cha
        this.id = id;
    }

    // Ghi đè phương thức displayInfo()
    displayInfo(): void {
        console.log(`Mã SV: ${this.id}, Tên SV: ${this.name}`);
    }
}

// Lớp Teacher kế thừa Person
class Teacher extends Person {
    public subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    // Ghi đè phương thức displayInfo()
    displayInfo(): void {
        console.log(`Tên GV: ${this.name}, Môn dạy: ${this.subject}`);
    }
}

// Tạo đối tượng Student
const student = new Student("SV001", "Nguyễn Văn A");
student.displayInfo(); // Mã SV: SV001, Tên SV: Nguyễn Văn A

// Tạo đối tượng Teacher
const teacher = new Teacher("Trần Thị B", "Toán học");
teacher.displayInfo(); // Tên GV: Trần Thị B, Môn dạy: Toán học
