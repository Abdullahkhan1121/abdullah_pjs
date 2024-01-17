console.log("FIRST CLASS PJS");

//DATA TYPES

name = "Asad";
num = "92345"
x = undefined;
y = null;
boolean = true;

//WE HAVE TWO KINDS OF DATA TYPES

//1) PRIMITIVE DATA TYPES STRING NUM BOOLEAN ETC
//2) UNPRIMITIVE DATA TYPES

let obj ={
    name : "ASAD",
    age : "18",
    grade : "A",
    phone : 45678,
    city : "KARACHI"
}

//FIRST METHOD TO GETTING VALUES
console.log(obj["name"]);
console.log(obj["phone"]);

//SECOND METHOD TO GETTING VALUES

console.log(obj.city);


for (let i in obj){
    console.log(obj , [i])
}