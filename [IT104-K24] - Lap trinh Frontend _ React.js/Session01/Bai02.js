
const a = 5;
const arr = [1, 2, 3];


try {
  a = 10;
} catch (error) {
  console.log("Loi khi gan lai bien a:", error.message);
}


arr.push(4);


console.log("Gia tri cua arr sau khi them phan tu:", arr);
