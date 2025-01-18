// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "Infinity:";
identifier1.innerText = identifier2.innerText = "isFiniteCheck";
// --------------------------------------------
const isFiniteCheck = isFinite(Infinity);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `isFinite(Infinity): ${isFiniteCheck}`;
