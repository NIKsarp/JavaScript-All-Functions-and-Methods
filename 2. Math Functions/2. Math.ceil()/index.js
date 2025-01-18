// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.ceil():`));
textName.appendChild(
  document.createTextNode(`Rounds a number upward to the nearest integer.`)
);
// --------------------------------------------
const identifier = `ceilValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const ceilValue = Math.ceil(4.2);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`Math.ceil(4.2): ${ceilValue}`));
