// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.split():";
textName.innerText = "Splits a string into an array of substrings.";
identifier1.innerText = identifier2.innerText = "splitString";
// --------------------------------------------
const string = "Hello World!";
const splitString = string.split("");
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello World!".split(""): ${splitString}`;
