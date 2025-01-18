// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`date().getMinutes():`));
textName.appendChild(
  document.createTextNode(`Returns the minutes (0-59) of a date.`)
);
// --------------------------------------------
const identifier = `currentMinutes`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const currentMinutes = new Date().getMinutes();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`new Date().getMinutes(): ${currentMinutes}`)
);
