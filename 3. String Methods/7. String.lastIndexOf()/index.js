// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.lastIndexOf():`));
textName.appendChild(
  document.createTextNode(
    `Returns the position of the last occurrence of a specified value.`
  )
);
// --------------------------------------------
const identifier = `lastIndexOfNumber`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "Hello World!";
const lastIndexOfNumber = string.lastIndexOf("W");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(
    `"Hello World!".lastIndexOf("W"): ${lastIndexOfNumber}`
  )
);
