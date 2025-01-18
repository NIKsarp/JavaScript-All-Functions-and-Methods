// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`date().getDate():`));
textName.appendChild(
  document.createTextNode(
    `Returns the day of the week (0-6, where 0 is Sunday).`
  )
);
// --------------------------------------------
const identifier = `currentDate`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const currentDate = new Date().getDate();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`new Date().getDate(): ${currentDate}`)
);
