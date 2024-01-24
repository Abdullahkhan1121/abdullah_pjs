//DOM DOCUMENT OBJECT MODEL

let elem = document.getElementById('second');
// console.log(elem);
// elem.innerHTML = "An Apple a day keeps the doc away";
elem.textContent = "An Apple a day keeps doc away";
elem.style.backgroundColor = "yellow";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add('two');
elem.classList.add('three');
elem.id = "hello";
elem.classList.remove('three');

let myDiv = document.getElementsByClassName('container');
myDiv[0].innerHTML = "Pokemon";
myDiv[0].style.backgroundColor = "blue";
myDiv[0].style.color = "yellow";
myDiv[0].style.fontSize = "40px";
myDiv[0].style.textAlign = "center";
myDiv[0].classList.add("world");
myDiv[0].id = "pencil";

let newElem = document.createElement('p');
myDiv[0].appendChild(newElem);
newElem.innerHTML = "Doraemon";

// let pencil = document.createElement('img');
// newElem.appendChild(pencil);
// pencil.src = "4.jpeg";

