// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.min():`));
textName.appendChild(
  document.createTextNode(`Returns the smallest of zero or more numbers.`)
);
// --------------------------------------------
const identifier = `minValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const minValue = Math.min(10, 20, 30, 5);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`Math.min(10, 20, 30, 5): ${minValue}`)
);
