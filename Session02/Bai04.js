function checkElement(array, value) {
  return array.includes(value);
}

// Ví dụ sử dụng
console.log(checkElement([1, 2, 3, 4, 5], 3)); // true
console.log(checkElement([1, 2, 3, 4, 5], 6)); // false
console.log(checkElement(["apple", "banana", "cherry"], "banana")); // true
console.log(checkElement(["apple", "banana", "cherry"], "mango"));  // false
