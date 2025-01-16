// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "encodeURIComponent():";
textName.innerText = "Encodes a URI component by escaping characters.";
identifier1.innerText = identifier2.innerText = "encodeURIResult";
// --------------------------------------------
const uriComponent = "a=b&c=d";
const encodeURIResult = encodeURIComponent(uriComponent);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `encodeURIComponent(uriComponent): ${encodeURIResult}`;
