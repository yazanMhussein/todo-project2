let name = prompt("Enter your name:");
console.log(name)
let gender = prompt("Enter your gender (male or female):");
console.log(gender);
let age = prompt("Enter your age:");
console.log(age)
if(age <= 0 ){
    alert("Age should be greater than zero.");

}
let skipMessage = confirm("Do you want to skip the welcome message");

if (gender.toLowerCase() === "male") {
    if (skipMessage) {
        alert("Welcome, " + name + ".");
    } else {
        alert("Welcome, Mr. " + name + ".");
    }
} else if (gender.toLowerCase() === "female") {
    if (skipMessage) {
        alert("Welcome, " + name + ".");
    } else {
        alert("Welcome, Ms. " + name + ".");
    }
} else {
    alert("Welcome, " + name + ".");
}
