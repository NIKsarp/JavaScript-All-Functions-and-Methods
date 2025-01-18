// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "new Date():";
textName.innerText = "Creates a new Date object.";
identifier1.innerText = identifier2.innerText = "currentDate";
// --------------------------------------------
const currentDate = new Date();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `new Date(): ${currentDate}`;
