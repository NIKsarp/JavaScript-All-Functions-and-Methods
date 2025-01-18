// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.isArray():";
identifier1.innerText = identifier2.innerText = "isArrayCheck";
// --------------------------------------------
const isArrayCheck = Array.isArray([1, 2, 3]);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `Array.isArray([1, 2, 3]): ${isArrayCheck}`;
