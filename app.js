// Define variables
let guessedNumber;
let attempts = 0;
let attempt = document.getElementById("attemptNumber");
let nrInput = document.getElementById("userInput");
let answer = document.getElementById("hint");


// Assign number
let number = Math.floor(Math.random() * 100 + 1);
console.log(number);  //for checking the number


// Button click trigger
document.getElementById("checkButton").addEventListener("click", function () {
    checkNumber();
})


// Enter trigger
document.getElementById("userInput").addEventListener("keyup", function (event) {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
        checkNumber();
    }
});


// Define function
function checkNumber() {
    console.log("Pressed check button");
    attempts++;

    attempt.innerHTML = "Number of attempts: " + attempts;
    

    // Get number from input
    guessedNumber = nrInput.value;

    // if guess number matched
    if (number == guessedNumber) {
        alert("You are winner 💥 you guest in " + attempts + " times!")

        // Play again
        let nextGame = confirm("Do you wanna play again?");


        // Assign new number for next game
        if (nextGame) {
            number = Math.floor(Math.random() * 100 + 1);

        // Thank for participating
        } else {
            attempt.innerHTML = "";
            hint.innerHTML = "Thanks for game! 🤞";
            nrInput.value = "";
        }

    // Check number 1-100 and exist
    } else if (guessedNumber == "" || guessedNumber > 100 || guessedNumber <= 0) {
        hint.style.color = "red";
        hint.innerText = "Write any number between 1 to 100!";

    // Check valid number
    } else if (guessedNumber.indexOf(".") != -1 || guessedNumber.indexOf(",") != -1) {
        hint.style.color = "green";
        hint.innerText = "This is not a natural number!";

    // Check lower number
    } else if (guessedNumber > number) {
        hint.innerText = "Please enter a lower number!";

    // Check higher number
    } else if (guessedNumber < number) {
        hint.innerText = "Please enter a higher number!";

    // Otherwise
    } else {
        hint.innerText = "Are you sure?";
    }
    // Reset and focus
    nrInput.value = "";
    nrInput.focus();

}