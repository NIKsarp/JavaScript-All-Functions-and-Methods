// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "date().getSeconds():";
textName.innerText = "Returns the seconds (0-59) of a date.";
identifier1.innerText = identifier2.innerText = "currentSeconds";
// --------------------------------------------
const currentSeconds = new Date().getSeconds();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `new Date().getSeconds(): ${currentSeconds}`;
