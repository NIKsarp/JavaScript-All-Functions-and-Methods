// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.replace():";
textName.innerText = "Replaces specified values in a string.";
identifier1.innerText = identifier2.innerText = "replacedString";
// --------------------------------------------
const string = "Hello World!";
const replacedString = string.replace("World", "JavaScript");
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello World!".replace("World", "JavaScript"): ${replacedString}`;
