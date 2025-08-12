class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo() {
        console.log(`Tên: ${this.name}, Cty: ${this.company}, SĐT: ${this.phone}`);
    }

    // Getter cho phone vì private không truy cập trực tiếp ở lớp con
    protected getPhone(): string {
        return this.phone;
    }
}

class Manager extends Employee {
    teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    printInfo() {
        console.log(`Tên: ${this.name}, Cty: ${this.company}, SĐT: ${this.getPhone()}, Team size: ${this.teamSize}`);
    }
}

// Test
let emp = new Employee("Nguyễn Văn A", "CMC", "098765436");
emp.printInfo();

let manager = new Manager("Nguyễn Văn B", "CMC", "098765436", 6);
manager.printInfo();
