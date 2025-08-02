
const students = [
  { id: 1, name: "Nguyen A" },
  { id: 2, name: "Tran B" },
  { id: 3, name: "Le C" }
];


students.forEach(function(student) {
  console.log(`Xin chao ${student.name}! Ma so: ${student.id}.`);
});
