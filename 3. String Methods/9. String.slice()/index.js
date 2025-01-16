// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.slice():";
textName.innerText = "Extracts a section of a string.";
identifier1.innerText = identifier2.innerText = "sliceString";
// --------------------------------------------
const string = "Hello World!";
const sliceString = string.slice(6, 11);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello World!".slice(6, 11): ${sliceString}`;
