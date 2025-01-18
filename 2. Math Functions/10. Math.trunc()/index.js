// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.trunc():`));
textName.appendChild(
  document.createTextNode(
    `Returns the integer part of a number by removing the fractional part.`
  )
);
// --------------------------------------------
const identifier = `truncValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const truncValue = Math.trunc(4.9);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`Math.trunc(4.9): ${truncValue}`)
);
