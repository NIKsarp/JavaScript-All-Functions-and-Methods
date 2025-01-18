// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`date().toISOString():`));
textName.appendChild(
  document.createTextNode(`Converts a date to an ISO string.`)
);
// --------------------------------------------
const identifier = `currentISOString`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const currentISOString = new Date().toISOString();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`new Date().toISOString(): ${currentISOString}`)
);
