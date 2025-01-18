// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "isFinite():";
textName.innerText = "Determines whether a value is a finite number.";
identifier1.innerText = identifier2.innerText = "isFiniteCheck";
// --------------------------------------------
const isFiniteCheck = isFinite(100);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `isFinite(100): ${isFiniteCheck}`;
