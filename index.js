var random1Number = Math.floor(Math.random() * 6) + 1; // 1-6
var random2Number = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImage1 = "./dice" + random1Number + ".png"; // images/dice1.png - images/dice6.png
var randomImage2 = "./dice" + random2Number + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImage1); // Set the src attribute of the first image to randomImage1
document.querySelectorAll("img")[1].setAttribute("src", randomImage2); // Set the src attribute of the second image to randomImage2

// If player 1 wins
if (random1Number > random2Number) {
  document.querySelector(" h1").innerHTML = "Player 1 Wins! 🚩"; // Change the heading to Player 1 Wins!
}
// If player 2 wins
else if (random1Number < random2Number) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; // Change the heading to Player 2 Wins!
}
// If it's a draw
else {
  document.querySelector("h1").innerHTML = "Draw!"; // Change the heading to Draw!
}
// Change the heading to Draw! if both players have the same number
// If player 1 wins, change the heading to Player 1 Wins! 
// 🚩
// If player 2 wins, change the heading to Player 2 Wins! 
// 🚩
// If it's a draw, change the heading to Draw!
// Change the heading to Draw! if both players have the same number
