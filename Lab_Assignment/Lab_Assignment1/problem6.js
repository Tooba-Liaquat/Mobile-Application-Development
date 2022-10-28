//Write a JavaScript program where the program takes a random integer between 1 to 10, 
//the user is then prompted to input a guess number. If the user input matches with guess number,
// the program will display a message "You WIN" otherwise display a message "Not matched".

function getRandomNumber()
    {
       var randomNum = Math.floor(Math.random() * 10) + 1;
       return randomNum;
    } 
var number = getRandomNumber();
console.log("Random number is "+number);
function CheckNumber(guessNumber)
    {
       //checks if guessed number is the random number we stored
       if(guessNumber === number)
       {
        //success we console.log saying you win
        console.log("You Win!");
       }
       else
       {
        //not the same number
        console.log("Wrong!,Try again")
       }
    }
    let guessNumber=8;
    console.log("check "+CheckNumber(guessNumber));