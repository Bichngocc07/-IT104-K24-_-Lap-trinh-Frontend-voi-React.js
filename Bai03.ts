// Định nghĩa lớp Animal là abstract class
abstract class Animal {
    public name: string; // thuộc tính tên động vật

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức abstract: các lớp con phải cài đặt lại
    abstract makeNoise(): void;

    // Phương thức in tên động vật
    printName(): void {
        console.log(`Tên: ${this.name}`);
    }
}

// Lớp Cat kế thừa Animal
class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}

// Lớp Dog kế thừa Animal
class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

// Tạo đối tượng
const myCat = new Cat("Miu Miu");
const myDog = new Dog("Cún Con");

// Gọi phương thức
myCat.printName(); // Tên: Miu Miu
myCat.makeNoise(); // meo meo

myDog.printName(); // Tên: Cún Con
myDog.makeNoise(); // gâu gâu
