// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.trim():";
textName.innerText = "Removes whitespace from both ends of a string.";
identifier1.innerText = identifier2.innerText = "trimmedString";
// --------------------------------------------
const string = "   Hello World!    ";
const trimmedString = string.trim();
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"   Hello World!    ".trim(): ${trimmedString}`;
