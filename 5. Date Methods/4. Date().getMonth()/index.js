// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`date().getFullYear():`));
textName.appendChild(
  document.createTextNode(`Returns the month (0-11) of a date.`)
);
// --------------------------------------------
const identifier = `currentMonth`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const currentMonth = new Date().getMonth();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`new Date().getMonth(): ${currentMonth}`)
);
