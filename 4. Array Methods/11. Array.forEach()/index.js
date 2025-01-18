// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.forEach():";
identifier1.innerText = identifier2.innerText = "sum";
// --------------------------------------------
const arr = [1, 2, 3];
let sum = 0;
arr.forEach((num) => (sum += num));
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.forEach((num) => (sum += num)): ${sum}`;
