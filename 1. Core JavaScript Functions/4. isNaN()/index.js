// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`isNaN():`));
textName.appendChild(
  document.createTextNode(`Determines whether a value is NaN (Not-a-Number).`)
);
// --------------------------------------------
const identifier = `isNaNCheck`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const isNaNCheck = isNaN("text");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`isNaN("text"): ${isNaNCheck}`));
