// Number Guessing Game

function startGame() {
    let secretNumber = 7; // fixed number for simplicity
    let guess;
    let attempts = 0;

    // Loop until correct guess
    while (guess !== secretNumber) {
        guess = Number(prompt("Guess a number between 1 and 10:"));
        attempts++;

        // Conditions
        if (guess === secretNumber) {
            alert("Correct! You guessed in " + attempts + " attempts.");
        } else if (guess > secretNumber) {
            alert("Too high! Try again.");
        } else {
            alert("Too low! Try again.");
        }
    }
}

// Call function
startGame();