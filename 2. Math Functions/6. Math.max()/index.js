// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.max():`));
textName.appendChild(
  document.createTextNode(`Returns the largest of zero or more numbers.`)
);
// --------------------------------------------
const identifier = `maxValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const maxValue = Math.max(10, 20, 30, 5);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`Math.max(10, 20, 30, 5): ${maxValue}`)
);
