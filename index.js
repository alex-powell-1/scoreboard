let lucy = 0;
let nate = 0;
let will = 0;

document.getElementById("lucyScore").textContent = lucy;
document.getElementById("nateScore").textContent = nate;
document.getElementById("willScore").textContent = will;

function score(team, pointValue) {
  fireworks();
  if (team == "lucy") {
    lucy += pointValue;
    document.getElementById("lucyScore").textContent = lucy;
  } else if (team == "nate") {
    nate += pointValue;
    document.getElementById("nateScore").textContent = nate;
  } else {
    will += pointValue;
    document.getElementById("willScore").textContent = will;
  }
  setTimeout(removeFireworks, 2000);
}

const fireworksSound = new Audio("fireworks.mp3");
const resetSound = new Audio("chime.wav");

function reset() {
  lucy = 0;
  nate = 0;
  will = 0;
  document.getElementById("lucyScore").textContent = lucy;
  document.getElementById("nateScore").textContent = nate;
  document.getElementById("willScore").textContent = will;
  resetSound.play();
}

function fireworks() {
  document.body.style.backgroundImage = "url('fireworks.gif')";
  fireworksSound.play();
}

function removeFireworks() {
  document.body.style.backgroundImage = "none";
}
