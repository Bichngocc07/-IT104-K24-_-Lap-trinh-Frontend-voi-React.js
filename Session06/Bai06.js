
class Student {
    #id;
    #name;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    
    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }
}


let allStudents = [];


class Classroom {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

  
    showStudents() {
        console.log(`Danh sách học sinh lớp ${this.name}:`);
        this.students.forEach((student, index) => {
            console.log(`${index + 1}. ${student.getName()} (ID: ${student.getId()})`);
        });
    }

   
    addStudent(student) {
        this.students.push(student);
    }

   
    filterStudent(id) {
        return this.students.filter(student => student.getId() === id);
    }

   
    addStudentInClass(id) {
        const index = allStudents.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        } else {
            console.log(`Không tìm thấy học sinh ID: ${id}`);
        }
    }
}


allStudents.push(new Student(1, "Ngọc"));
allStudents.push(new Student(2, "Bảo"));
allStudents.push(new Student(3, "Việt"));
allStudents.push(new Student(4, "Hòa"));
allStudents.push(new Student(5, "Hường"));
allStudents.push(new Student(6, "Hảo"));


const classA = new Classroom("A");
const classB = new Classroom("B");


classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);


classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);


classA.showStudents();
classB.showStudents();


console.log("Tìm học sinh ID=2 trong lớp A:", classA.filterStudent(2));
