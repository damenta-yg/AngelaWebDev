let randomPlayer1 = Math.floor(Math.random() * 6) + 1;
console.log(randomPlayer1);

let randomPlayer2 = Math.floor(Math.random() * 6) + 1;
console.log(randomPlayer2);

if (randomPlayer1 > randomPlayer2) {
  document.body.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomPlayer2 > randomPlayer1) {
  document.body.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.body.querySelector("h1").innerHTML = "Draw";
}
document.body.querySelector(
  ".img1"
).attributes.src.value = `./images/dice${randomPlayer1}.png`;
document.body.querySelector(
  ".img2"
).attributes.src.value = `./images/dice${randomPlayer2}.png`;
