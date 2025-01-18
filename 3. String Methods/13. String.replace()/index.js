// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`string.replace():`));
textName.appendChild(
  document.createTextNode(`Replaces specified values in a string.`)
);
// --------------------------------------------
const identifier = `replacedString`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const string = "Hello World!";
const replacedString = string.replace("World", "JavaScript");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(
    `"Hello World!".replace("World", "JavaScript"): ${replacedString}`
  )
);
