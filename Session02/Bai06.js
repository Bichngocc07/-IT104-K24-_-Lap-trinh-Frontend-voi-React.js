function checkEndString(longStr, shortStr) {
  return longStr.endsWith(shortStr);
}

// 🧪 Kiểm tra đầu vào & đầu ra:
console.log(checkEndString("Hello, World!", "Hello"));   // false
console.log(checkEndString("Hi there!", "there!"));      // true
