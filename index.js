let lucy = 0;
let nate = 0;
let will = 0;

document.getElementById("lucyScore").textContent = lucy;
document.getElementById("nateScore").textContent = nate;
document.getElementById("willScore").textContent = will;

function score(team, pointValue) {
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
}

function reset() {
  lucy = 0;
  nate = 0;
  will = 0;
  document.getElementById("lucyScore").textContent = lucy;
  document.getElementById("nateScore").textContent = nate;
  document.getElementById("willScore").textContent = will;
}
