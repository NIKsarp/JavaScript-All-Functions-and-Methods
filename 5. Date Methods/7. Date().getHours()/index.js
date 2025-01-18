// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`date().getHours():`));
textName.appendChild(
  document.createTextNode(`Returns the hour (0-23) of a date.`)
);
// --------------------------------------------
const identifier = `currentHours`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const currentHours = new Date().getHours();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`new Date().getHours(): ${currentHours}`)
);
