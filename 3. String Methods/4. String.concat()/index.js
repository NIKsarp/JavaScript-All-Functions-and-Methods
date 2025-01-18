// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.concat():`));
textName.appendChild(document.createTextNode(`Combines two or more strings.`));
// --------------------------------------------
const identifier = `concatString`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "Hello";
const concatString = string.concat(" World!");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`"Hello".concat(" World!"): ${concatString}`)
);
