let count;
let randomNumber;

function resetGame() {
  randomNumber = parseInt(Math.random() * 101);
  count = 0;

}
resetGame();

function guessTheNumber() {
  let userInput = parseInt(document.querySelector
    ("input").value);

  if (userInput > randomNumber) {
    alert("TooBig");
    count++;
  } else if (userInput < randomNumber) {
    alert("Too Small")
    count++;
  } else {
    alert("Coungratulations!! You Have Won! Number of Wrong Guess: " + count);
    resetGame();
  }
}