// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.indexOf():";
identifier1.innerText = identifier2.innerText = "index";
// --------------------------------------------
const arr = [1, 2, 3];
const index = arr.indexOf(3);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.indexOf(3): ${index}`;
