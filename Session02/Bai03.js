const typeConsole = (type = "log") => {
  console[type](`Đây là type:  ${type}`);
};

// Ví dụ gọi hàm
typeConsole("log");   // In: Đây là type:  log
typeConsole("warn");  // In: Đây là type:  warn (với biểu tượng cảnh báo)
typeConsole("error"); // In: Đây là type:  error (với biểu tượng lỗi)
typeConsole();        // In: Đây là type:  log (vì mặc định)
