// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "isNaN():";
textName.innerText = "Determines whether a value is NaN (Not-a-Number).";
identifier1.innerText = identifier2.innerText = "isNaNCheck";
// --------------------------------------------
const isNaNCheck = isNaN("text");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `isNaN("text"): ${isNaNCheck}`;
