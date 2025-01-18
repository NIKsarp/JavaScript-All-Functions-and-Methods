// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.unshift():";
identifier1.innerText = identifier2.innerText = "arr";
// --------------------------------------------
const arr = [1, 2, 3];
arr.unshift(0);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.unshift(0): ${arr}`;
