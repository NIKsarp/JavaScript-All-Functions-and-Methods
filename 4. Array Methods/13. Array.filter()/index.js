// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.filter():";
identifier1.innerText = identifier2.innerText = "filterArray";
// --------------------------------------------
const arr = [1, 2, 3];
const filterArray = arr.filter((num) => num < 3);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.filter((num) => num < 3): ${filterArray}`;
