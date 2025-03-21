let FavNumber = 7;

let numGuess = 0 ;

let guess = parseInt(prompt("Guess my favorite number!"));

if (guess === FavNumber) {
  console.log(`
Congratulations! You guessed my favorite number in $
    {numGuesses} guesses.`0;
    break;
  }else if (guess < FavNumber)
{
  console.log("your guess is too low! try again.");
   }else{
  console.log("your guess is too high!Try again.");
   }
}

  
  
