
const student = {
  name: "Ngọc",
  age: 20,
  email: "ngoc@example.com"
};


function introduce(student) {
  return `Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`;
}

document.getElementById("output").innerText = introduce(student);
