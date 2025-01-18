// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.toLowerCase():`));
textName.appendChild(
  document.createTextNode(`Converts a string to lowercase.`)
);
// --------------------------------------------
const identifier = `lowerCaseString`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "Hello World!";
const lowerCaseString = string.toLowerCase();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`"Hello World!".toLowerCase(): ${lowerCaseString}`)
);
