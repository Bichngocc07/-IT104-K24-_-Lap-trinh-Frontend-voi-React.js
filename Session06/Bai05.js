
const changeSpeed = {
    methods: ["speedUp", "slowDown", "stop"],
    checkImplementation(obj) {
        for (const method of this.methods) {
            if (typeof obj[method] !== "function") {
                throw new Error(`Lớp chưa cài đặt phương thức: ${method}`);
            }
        }
    }
};


class Vehicle {
    #speed; 

    constructor() {
        this.#speed = 0;
        changeSpeed.checkImplementation(this); 
    }

    
    speedUp(amount = 10) {
        this.#speed += amount;
        console.log(`Tăng tốc: ${amount} km/h -> Tốc độ hiện tại: ${this.#speed} km/h`);
    }

   
    slowDown(amount = 10) {
        this.#speed = Math.max(0, this.#speed - amount);
        console.log(`Giảm tốc: ${amount} km/h -> Tốc độ hiện tại: ${this.#speed} km/h`);
    }

    
    stop() {
        this.#speed = 0;
        console.log(`Dừng phương tiện. Tốc độ hiện tại: ${this.#speed} km/h`);
    }
}


const car = new Vehicle();
car.speedUp(20);   
car.speedUp(15);  
car.slowDown(10);  
car.stop();      
