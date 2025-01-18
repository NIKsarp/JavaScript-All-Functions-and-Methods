// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.round():`));
textName.appendChild(
  document.createTextNode(`Rounds a number to the nearest integer.`)
);
// --------------------------------------------
const identifier = `roundValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const roundValue = Math.round(4.5);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`Math.round(4.5): ${roundValue}`)
);
