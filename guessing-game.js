function guessingGame() {
    const correctGuess = Math.floor(Math.random() * 100);
    let howManyGuesses = 0;
    let gameOver = false;

    return function guess(guess){
        if(gameOver) return "The game is over, you already won!";

        if(guess === correctGuess) {
            gameOver = true;
            howManyGuesses++;
            return `You win! You found ${correctGuess} in ${howManyGuesses} guesses.`
        }

        if(guess < correctGuess){
            howManyGuesses++;
            return `${guess} is too low!`
        } 

        if(guess > correctGuess) {
            howManyGuesses++;
            return `${guess} is too high!`
        } 
    }
}

module.exports = { guessingGame };
