// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`encodeURIComponent():`));
textName.appendChild(
  document.createTextNode(`Encodes a URI component by escaping characters.`)
);
// --------------------------------------------
const identifier = `encodeURIResult`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const uriComponent = "a=b&c=d";
const encodeURIResult = encodeURIComponent(uriComponent);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(
    `encodeURIComponent(uriComponent): ${encodeURIResult}`
  )
);
