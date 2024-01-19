let Heroes = ["Super-man" , "Bat-man" , "Spider-man" , "Iron-man" , "Ant-man" , "Aqua-man" ]
console.log(Heroes);
// Arrays are mutable
Heroes[5] = "Aqua-man";
console.log(Heroes);

// SPLICE
console.log(Heroes.splice(2,2,"why-man"));
console.log(Heroes);

let bbq = ["tikka" , "broast" , "Charga" , "Malai boti"];

let seafood = ["Prawn" , "Salmon" , "Lobster"];

let sweetdish = ["Gulab jamun" , "Jelly" , "Ice Cream"];

let menu = bbq.concat(sweetdish,seafood);
console.log(menu);
