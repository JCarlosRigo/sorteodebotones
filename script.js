const choiceButtons = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const resetButton = document.querySelector("#reset-button");

const messages = ["Has ganado", "Has perdido"];

function playRound() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  result.textContent = message;
  result.classList.toggle("win", message === "Has ganado");
  result.classList.toggle("lose", message === "Has perdido");

  choiceButtons.forEach((button) => {
    button.disabled = true;
  });

  resetButton.hidden = false;
}

function resetGame() {
  result.textContent = "Pulsa un botón para probar suerte.";
  result.classList.remove("win", "lose");
  resetButton.hidden = true;

  choiceButtons.forEach((button) => {
    button.disabled = false;
  });
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", playRound);
});

resetButton.addEventListener("click", resetGame);
