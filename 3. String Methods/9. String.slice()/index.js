// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.slice():`));
textName.appendChild(
  document.createTextNode(`Extracts a section of a string.`)
);
// --------------------------------------------
const identifier = `sliceString`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "Hello World!";
const sliceString = string.slice(6, 11);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`"Hello World!".slice(6, 11): ${sliceString}`)
);
