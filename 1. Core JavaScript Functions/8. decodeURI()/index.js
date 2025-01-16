// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "decodeURI():";
textName.innerText = "Decodes a URI encoded by encodeURI.";
identifier1.innerText = identifier2.innerText = "decodeURIResult";
// --------------------------------------------
const uri = "https://example.com/a%20b";
const decodeURIResult = decodeURI(uri);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `decodeURI(uri): ${decodeURIResult}`;
