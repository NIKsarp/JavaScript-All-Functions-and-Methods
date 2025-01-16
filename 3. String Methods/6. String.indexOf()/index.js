// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.indexOf():";
textName.innerText =
  "Returns the position of the first occurrence of a specified value.";
identifier1.innerText = identifier2.innerText = "indexOfNumber";
// --------------------------------------------
const string = "Hello World!";
const indexOfNumber = string.indexOf("W");
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `"Hello World!".indexOf("W"): ${indexOfNumber}`;
