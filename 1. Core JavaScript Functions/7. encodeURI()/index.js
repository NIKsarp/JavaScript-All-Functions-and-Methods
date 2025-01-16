// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "encodeURI():";
textName.innerText =
  "Encodes a Uniform Resource Identifier (URI) by escaping certain characters.";
identifier1.innerText = identifier2.innerText = "encodeURIResult";
// --------------------------------------------
const uri = "https://example.com/a b";
const encodeURIResult = encodeURI(uri);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `encodeURI(uri): ${encodeURIResult}`;
