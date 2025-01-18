// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.charCodeAt():`));
textName.appendChild(
  document.createTextNode(
    `Returns the Unicode of the character at the specified index.`
  )
);
// --------------------------------------------
const identifier = `charCodeAtResult`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "Hello World!";
const charCodeResult = string.charCodeAt(1);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`"Hello World!".charCodeAt(1): ${charCodeResult}`)
);
