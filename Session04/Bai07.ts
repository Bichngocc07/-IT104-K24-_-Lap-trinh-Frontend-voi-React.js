function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        // Kiểm tra nếu chuỗi chỉ chứa số
        if (/^\d+$/.test(input)) {
            const number = parseInt(input);
            console.log(number * number);
        } else {
            // Đếm số ký tự chữ cái (bỏ qua số và ký tự đặc biệt)
            const letters = input.match(/[a-zA-Z]/g);
            const count = letters ? letters.length : 0;
            console.log(`${count} ký tự chữ cái`);
        }
    } else if (typeof input === "number") {
        if (input < 2) {
            console.log("Không phải số nguyên tố");
            return;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
    } else if (typeof input === "boolean") {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
}
