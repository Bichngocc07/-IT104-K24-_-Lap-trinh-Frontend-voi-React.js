class vehicle {
    protected name: string
    protected speed: number // td
    protected id: number

    constructor(name: string, speed: number, id: number) {
        this.id = id
        this.name = name
        this.speed = speed
    }
    slowDown(tocdocangiam: number): void {

        if (this.speed - tocdocangiam < 0) {
            this.speed = 0
        } else {
            this.speed = this.speed - tocdocangiam
        }
    }

    // this.speed : ví (tiền trong ví )
    //tocdocantang : số tiền cho theem vào
    speedUp(tocdocantang: number): void {
        this.speed = this.speed + tocdocantang
    }
    showSpeed(): void {
        console.log(`${this.id} ${this.name} ${this.speed}`)
    }


}
class Bicycle  extends vehicle {
    private gear: number 
    constructor(gear: number, name: string, speed: number, id: number){
        super(name, speed, id);
        this.gear = gear
    }

    showInfo() :void {
        console.log(this.gear);
        
    }

}

const bike = new Bicycle(6, "Mountain Bike", 15, 101);
bike.showSpeed(); // 101 Mountain Bike 15
bike.speedUp(5);
bike.showSpeed(); // 101 Mountain Bike 20



