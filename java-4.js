// for loop
for(let i=0; i<10; i++){
    console.log("this is for loop" ,i);
}

// while loop

let num = 15;

while(num<=20){
    console.log("this is while loop" , num);
    num++;
}

// do while loop
let a =50;

do {
    console.log("this is do while loop" ,a)
    a++;
} while (a<49);

let obj = {
    name : "mike",
    age : 20,
    grade : "A+",
}

for(let z in obj){
    console.log(z , obj[z])
}

// task 1

// let number =prompt("enter Your Value")
// for (let w=1; w<=10; w++){
//     console.log(`${number} x ${w} = ${number*w}`)
// }

// task 2

let number = prompt("enter your value")
for(let m=0 ; m<=number ; m++){
    if(m%2 == 0){
        console.log(`${m} is Even`)
    }else{
        console.log(`${m}is odd`)
    }
}


