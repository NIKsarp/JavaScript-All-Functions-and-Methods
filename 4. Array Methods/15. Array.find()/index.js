// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.find():";
identifier1.innerText = identifier2.innerText = "findArray";
// --------------------------------------------
const arr = [1, 2, 3];
const findArray = arr.find((num) => num > 1);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.find((num) => num > 1): ${findArray}`;
