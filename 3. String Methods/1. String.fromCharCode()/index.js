// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.fromCharCode():";
textName.innerText = "Converts Unicode values to a string.";
identifier1.innerText = identifier2.innerText = "stringFromUnicode";
// --------------------------------------------
const stringFromUnicode = String.fromCharCode(72, 101, 108, 108, 111);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `String.fromCharCode(72, 101, 108, 108, 111): ${stringFromUnicode}`;
