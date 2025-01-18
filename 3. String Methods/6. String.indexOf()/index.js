// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.indexOf():`));
textName.appendChild(
  document.createTextNode(
    `Returns the position of the first occurrence of a specified value.`
  )
);
// --------------------------------------------
const identifier = `indexOfNumber`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "Hello World!";
const indexOfNumber = string.indexOf("W");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`"Hello World!".indexOf("W"): ${indexOfNumber}`)
);
