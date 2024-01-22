let gameNum = 7;
let userNum = prompt("Enter The Lucky Number");
while(userNum != gameNum){
    userNum = prompt("You Guess The Wrong Number : Guess Again")
}

swal({
    title: "Congratulations!",
    text: "You Won The Game",
    timer: 5000
  });