// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.sqrt():`));
textName.appendChild(
  document.createTextNode(`Returns the square root of a number.`)
);
// --------------------------------------------
const identifier = `sqrtValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const sqrtValue = Math.sqrt(16);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`Math.sqrt(16): ${sqrtValue}`));
