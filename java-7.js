// Marksheet Task
let name = prompt("Enter your Name")
console.log(name);

let English = parseInt(prompt("Enter Your English Subject Marks"))

let Maths= parseInt(prompt("Enter Your Maths Subject Marks"))

let Sindhi = parseInt(prompt("Enter Your Sindhi Subject Marks"))

let Urdu = parseInt(prompt("Enter Your Urdu Subject Marks"))

let Computer = parseInt(prompt("Enter Your Computer Subject Marks"))

let obtainedMarks = English + Maths + Sindhi + Urdu + Computer;
console.log(obtainedMarks);
let totalMarks = 500;
let percentage = obtainedMarks / totalMarks * 100;
console.log(percentage); 

if (percentage >=90 && percentage <=100){
    console.log("your Grade is A+1")
}
else if (percentage >=80 && percentage <=90){
    console.log("your Grade is A+")
}
else if (percentage >=70 && percentage <=80){
    console.log("your Grade is A")
}
else if (percentage >=60 && percentage <=70){
    console.log("your Grade is B")
}
else if (percentage >=50 && percentage <=60){
    console.log("your Grade is C")
}
else if (percentage >=40 && percentage <=50){
    console.log("your Grade is D")
}
else{
    console.log("Mission Failed")
}


