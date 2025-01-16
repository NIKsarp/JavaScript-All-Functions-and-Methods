// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.charAt():";
textName.innerText =
  "Returns the character at the specified index in a string.";
identifier1.innerText = identifier2.innerText = "charAtResult";
// --------------------------------------------
const string = "Hello World!";
const charAtResult = string.charAt(1);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello World!".charAt(1): ${charAtResult}`;
