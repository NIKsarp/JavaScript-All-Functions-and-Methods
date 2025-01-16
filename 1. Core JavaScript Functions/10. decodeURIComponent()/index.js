// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "decodeURIComponent():";
textName.innerText = "Decodes a URI component encoded by encodeURIComponent.";
identifier1.innerText = identifier2.innerText = "decodeURIComponentResult";
// --------------------------------------------
const uriComponent = "a%3Db%26c%3Dd";
const decodeURIComponentResult = decodeURIComponent(uriComponent);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `decodeURIComponent(uriComponent): ${decodeURIComponentResult}`;
