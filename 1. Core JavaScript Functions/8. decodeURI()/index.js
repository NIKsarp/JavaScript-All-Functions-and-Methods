// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`decodeURI():`));
textName.appendChild(
  document.createTextNode(`Decodes a URI encoded by encodeURI.`)
);
// --------------------------------------------
const identifier = `decodeURIResult`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
const uri = "https://example.com/a%20b";
const decodeURIResult = decodeURI(uri);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`decodeURI(uri): ${decodeURIResult}`)
);
