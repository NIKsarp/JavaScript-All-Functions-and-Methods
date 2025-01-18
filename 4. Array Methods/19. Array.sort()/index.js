// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.sort():";
identifier1.innerText = identifier2.innerText = "sortArray";
// --------------------------------------------
const arr = [1, 2, 3];
const sortArray = arr.sort();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.sort(): ${sortArray}`;
