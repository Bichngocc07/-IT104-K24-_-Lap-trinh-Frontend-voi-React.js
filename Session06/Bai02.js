
class Job {
    constructor(type) {
        if (this.constructor === Job) {
            throw new Error("Không thể tạo đối tượng trực tiếp từ lớp Job (abstract)");
        }
        this.type = type;
    }

   
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }


    calculateSalary() {
        throw new Error("Phương thức calculateSalary() phải được cài đặt ở lớp con");
    }
}


class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary() {
        return 30000 * this.workingHour;
    }
}


class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }

    calculateSalary() {
        return 10000000;
    }
}


const parttime = new ParttimeJob("Part-time", 80);
const fulltime = new FulltimeJob("Full-time");

parttime.printType();
console.log(`Lương: ${parttime.calculateSalary().toLocaleString()} VND`);

fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary().toLocaleString()} VND`);
