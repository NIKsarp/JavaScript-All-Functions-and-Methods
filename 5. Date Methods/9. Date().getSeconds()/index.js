// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`date().getSeconds():`));
textName.appendChild(
  document.createTextNode(`Returns the seconds (0-59) of a date.`)
);
// --------------------------------------------
const identifier = `currentSeconds`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const currentSeconds = new Date().getSeconds();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`new Date().getSeconds(): ${currentSeconds}`)
);
