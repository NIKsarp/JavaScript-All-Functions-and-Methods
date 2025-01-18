// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.fromCharCode():`));
textName.appendChild(
  document.createTextNode(`Converts Unicode values to a string.`)
);
// --------------------------------------------
const identifier = `stringFromUnicode`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const stringFromUnicode = String.fromCharCode(72, 101, 108, 108, 111);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`String.fromCharCode(72, 101, 108, 108, 111): ${stringFromUnicode}
`)
);
