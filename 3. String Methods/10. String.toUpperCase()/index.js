// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.toUpperCase():";
textName.innerText = "Converts a string to uppercase.";
identifier1.innerText = identifier2.innerText = "upperCaseString";
// --------------------------------------------
const string = "Hello World!";
const upperCaseString = string.toUpperCase();
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello World!".toUpperCase(): ${upperCaseString}`;
