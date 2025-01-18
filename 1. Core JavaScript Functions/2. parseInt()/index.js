// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`parseInt():`));
textName.appendChild(
  document.createTextNode(
    `Converts a string to an integer, optionally specifying the base (radix).`
  )
);
// --------------------------------------------
const identifier = `parseIntValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const parseIntValue = parseInt("101", 2);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`parseInt("101", 2): ${parseIntValue}`)
);
