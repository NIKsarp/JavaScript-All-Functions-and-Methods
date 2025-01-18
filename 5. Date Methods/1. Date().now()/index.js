// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`date.now():`));
textName.appendChild(
  document.createTextNode(
    `Returns the current timestamp in milliseconds since January 1, 1970.`
  )
);
// --------------------------------------------
const identifier = `now`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const now = Date.now();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`Date.now(): ${now}`));
