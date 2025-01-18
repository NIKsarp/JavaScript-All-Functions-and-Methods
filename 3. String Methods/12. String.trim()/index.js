// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.trim():`));
textName.appendChild(
  document.createTextNode(`Removes whitespace from both ends of a string.`)
);
// --------------------------------------------
const identifier = `trimmedString`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "   Hello World!    ";
const trimmedString = string.trim();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`"   Hello World!    ".trim(): ${trimmedString}`)
);
