// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.slice():";
identifier1.innerText = identifier2.innerText = "slicedArray";
// --------------------------------------------
const arr = [1, 2, 3, 4, 5];
const slicedArray = arr.slice(1, 3);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.slice(1, 3): ${slicedArray}`;
