// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`encodeURI():`));
textName.appendChild(
  document.createTextNode(
    `Encodes a Uniform Resource Identifier (URI) by escaping certain characters.`
  )
);
// --------------------------------------------
const identifier = `encodeURIResult`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const uri = "https://example.com/a b";
const encodeURIResult = encodeURI(uri);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`encodeURI(uri): ${encodeURIResult}`)
);
