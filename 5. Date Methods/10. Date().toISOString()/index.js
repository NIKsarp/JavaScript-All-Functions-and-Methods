// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "date().toISOString():";
textName.innerText = "Converts a date to an ISO string.";
identifier1.innerText = identifier2.innerText = "currentISOString";
// --------------------------------------------
const currentISOString = new Date().toISOString();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `new Date().toISOString(): ${currentISOString}`;
