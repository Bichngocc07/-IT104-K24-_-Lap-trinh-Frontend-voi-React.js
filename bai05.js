var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
  
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };

    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
 
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
  
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };

    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());

var rect = new Rectangle(5, 10);
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Chu vi:", rect.getPerimeter());
console.log("Diện tích:", rect.getArea());

rect.setWidth(8);
rect.setHeight(12);
console.log("\nSau khi cập nhật:");
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Chu vi:", rect.getPerimeter());
console.log("Diện tích:", rect.getArea());
