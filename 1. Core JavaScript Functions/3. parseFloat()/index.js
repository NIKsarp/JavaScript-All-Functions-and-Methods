// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`parseFloat():`));
textName.appendChild(
  document.createTextNode(`Converts a string to a floating-point number.`)
);
// --------------------------------------------
const identifier = `parseFloatValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const parseFloatValue = parseFloat("3.14");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`parseFloat("3.14"): ${parseFloatValue}`)
);
