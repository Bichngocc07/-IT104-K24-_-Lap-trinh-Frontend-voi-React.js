
class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Không thể tạo đối tượng trực tiếp từ lớp abstract Shape");
        }
        this.name = name;
    }

  
    getName() {
        return this.name;
    }

   
    getSize() {
        throw new Error("Phương thức getSize() phải được cài đặt ở lớp con");
    }
}


class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name); 
        this.width = width;
        this.height = height;
    }

    getSize() {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}


const rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log("Tên hình:", rect.getName());
rect.getSize();
