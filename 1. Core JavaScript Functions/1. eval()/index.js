// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`eval():`));
textName.appendChild(
  document.createTextNode(`Evaluates JavaScript code represented as a string.`)
);
// --------------------------------------------
const identifier = `evalValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const evalValue = eval("5 + 5");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`eval("5 + 5"): ${evalValue}`));
