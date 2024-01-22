let grade = prompt("Enter Your Grade")
let per = parseInt(prompt("Enter Your Percentage"));
// turnary operation
let result = grade == "A" && per === 90 || "B" && per === 80 || "C" && per === 70 || "D" && per === 60 ? "PASS" : "FAIL";
console.log(result);

// FUNCTIONS
function hello(){
    console.log("My MUstaFa How R U?")
}
hello()
// Function with parameters
function person (name , age  , grade){
    return name + "" + age + "" + grade ;
}
let myValues = person ("Mustafa" , "2" , "G");

function sum (a,b){
    console.log(`The sum of a + b ${a+b}`)
}
sum(50,50)

// task 1
// function student ()