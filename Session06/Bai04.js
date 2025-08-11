
const Geometry = {
    methods: ["calculateArea", "calculatePerimeter"],


    checkImplementation(obj) {
        for (const method of this.methods) {
            if (typeof obj[method] !== "function") {
                throw new Error(`Lớp chưa cài đặt phương thức: ${method}`);
            }
        }
    }
};


class Circle {
    #radius; 

    constructor(radius) {
        this.#radius = radius;
        Geometry.checkImplementation(this); 
    }

    calculateArea() {
        return Math.PI * this.#radius * this.#radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.#radius;
    }
}


class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
        Geometry.checkImplementation(this); 
    }

    calculateArea() {
        return this.#width * this.#height;
    }

    calculatePerimeter() {
        return 2 * (this.#width + this.#height);
    }
}


const circle = new Circle(5);
console.log("=== Hình tròn ===");
console.log(`Diện tích: ${circle.calculateArea().toFixed(2)}`);
console.log(`Chu vi: ${circle.calculatePerimeter().toFixed(2)}`);

const rect = new Rectangle(10, 6);
console.log("\n=== Hình chữ nhật ===");
console.log(`Diện tích: ${rect.calculateArea()}`);
console.log(`Chu vi: ${rect.calculatePerimeter()}`);
