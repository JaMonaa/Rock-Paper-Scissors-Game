//first image
var randomNum1 = Math.floor((Math.random() * 3) + 1);
var image1 = "./img" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);

//second image
var randomNum2 = Math.floor((Math.random() * 3) + 1);
var image2 = "./img" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);

if (randomNum1 === 3 && randomNum2 === 1) {
    document.querySelector("h2").innerHTML = "Player 1 Wins!";
} else if (randomNum1 === 3 && randomNum2 === 2) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!";
} else if (randomNum1 === 1 && randomNum2 === 2) {
    document.querySelector("h2").innerHTML = "Player 1 Wins!";
} else if (randomNum1 === 1 && randomNum2 === 3) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!";
} else if (randomNum1 === 2 && randomNum2 === 1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!";
} else if (randomNum1 === 2 && randomNum2 === 3) {
    document.querySelector("h2").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h2").innerHTML = "Draw!"
}