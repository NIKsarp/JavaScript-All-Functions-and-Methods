// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`decodeURIComponent():`));
textName.appendChild(
  document.createTextNode(
    `Decodes a URI component encoded by encodeURIComponent.`
  )
);
// --------------------------------------------
const identifier = `decodeURIComponentResult`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const uriComponent = "a%3Db%26c%3Dd";
const decodeURIComponentResult = decodeURIComponent(uriComponent);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(
    `decodeURIComponent(uriComponent): ${decodeURIComponentResult}`
  )
);
