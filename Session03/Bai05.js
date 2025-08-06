// 
let firstName = "john";
let lastName = "doe";


function capitalize(word) {
    if (word.length === 0) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}

 
firstName = capitalize(firstName);
lastName = capitalize(lastName);


let fullName = firstName + " " + lastName;


console.log("Full name:", fullName);
