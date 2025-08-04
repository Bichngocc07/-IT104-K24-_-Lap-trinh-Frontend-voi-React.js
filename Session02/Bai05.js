let phoneBooks = [];

function addContact(name, phone, email) {
  const contact = {
    ten: name,
    soDienThoai: phone,
    email: email
  };
  phoneBooks.push(contact);
  console.log("Đã thêm liên hệ:", contact);
}

function displayContact() {
  console.log("DANH BẠ ĐIỆN THOẠI:");
  if (phoneBooks.length === 0) {
    console.log("Danh bạ trống.");
  } else {
    phoneBooks.forEach((contact, index) => {
      console.log(`\nLiên hệ #${index + 1}`);
      console.log(`Tên         : ${contact.ten}`);
      console.log(`SĐT         : ${contact.soDienThoai}`);
      console.log(`Email       : ${contact.email}`);
    });
  }
}

// Gọi thử hàm:
addContact("Nguyễn An", "0901234567", "an@gmail.com");
addContact("Lê Hoa", "0911222333", "hoa@gmail.com");
displayContact();
