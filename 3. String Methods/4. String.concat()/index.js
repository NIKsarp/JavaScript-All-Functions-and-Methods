// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.concat():";
textName.innerText = "Combines two or more strings.";
identifier1.innerText = identifier2.innerText = "concatString";
// --------------------------------------------
const string = "Hello";
const concatString = string.concat(" World!");
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello".concat(" World!"): ${concatString}`;
