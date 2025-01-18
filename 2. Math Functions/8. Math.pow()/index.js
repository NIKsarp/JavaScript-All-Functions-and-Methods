// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.pow():`));
textName.appendChild(
  document.createTextNode(
    `Returns the base raised to the power of the exponent.`
  )
);
// --------------------------------------------
const identifier = `powValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const powValue = Math.pow(2, 3);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`Math.pow(2, 3): ${powValue}`));
