
class Job {
    constructor(type) {
        if (this.constructor === Job) {
            throw new Error("Không thể khởi tạo trực tiếp lớp Job (abstract)");
        }
        this.type = type;
    }

  
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }


    calculateSalary() {
        throw new Error("Lớp con phải cài đặt phương thức calculateSalary()");
    }
}


class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }


    calculateSalary() {
        return 30000 * this.workingHour;
    }
}


class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    calculateSalary() {
        return 10000000;
    }
}


const jobs = [
    new ParttimeJob(80), 
    new FulltimeJob()
];

jobs.forEach(job => {
    job.printType(); 
    console.log(`Lương: ${job.calculateSalary().toLocaleString()} VND`);
    console.log("------------");
});
