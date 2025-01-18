// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "date().getMinutes():";
textName.innerText = "Returns the minutes (0-59) of a date.";
identifier1.innerText = identifier2.innerText = "currentMinutes";
// --------------------------------------------
const currentMinutes = new Date().getMinutes();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `new Date().getMinutes(): ${currentMinutes}`;
