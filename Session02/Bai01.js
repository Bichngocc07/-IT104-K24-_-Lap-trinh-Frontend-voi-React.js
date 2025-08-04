function sum(arr) { 
    let tong = 0;// 1 3 ,6 

    for (let i of arr ) {
        if (Number.isNaN(i)) {
            console.log("");
            return
        }
        tong += i ;  
    }
    return tong;
};

console.log(sum([1,2,3,4,5]))
