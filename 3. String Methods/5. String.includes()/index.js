// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.includes():";
textName.innerText = "Checks if a string contains a substring.";
identifier1.innerText = identifier2.innerText = "isIncluded";
// --------------------------------------------
const string = "Hello World!";
const isIncluded = string.includes("World!");
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello World!".includes("World!"): ${isIncluded}`;
