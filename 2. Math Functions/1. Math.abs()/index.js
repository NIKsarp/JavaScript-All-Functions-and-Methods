// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.abs():`));
textName.appendChild(
  document.createTextNode(`Returns the absolute value of a number.`)
);
// --------------------------------------------
const identifier = `absValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const absValue = Math.abs(-42);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`Math.abs(-42): ${absValue}`));
