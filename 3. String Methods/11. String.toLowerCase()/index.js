// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.toLowerCase():";
textName.innerText = "Converts a string to lowercase.";
identifier1.innerText = identifier2.innerText = "lowerCaseString";
// --------------------------------------------
const string = "Hello World!";
const lowerCaseString = string.toLowerCase();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `"Hello World!".toLowerCase(): ${lowerCaseString}`;
