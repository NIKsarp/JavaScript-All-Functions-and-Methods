// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`isFinite():`));
textName.appendChild(
  document.createTextNode(`Determines whether a value is a finite number.`)
);
// --------------------------------------------
const identifier = `isFiniteCheck`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const isFiniteCheck = isFinite(100);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`isFinite(100): ${isFiniteCheck}`)
);
