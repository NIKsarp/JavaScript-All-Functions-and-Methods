// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.join():";
identifier1.innerText = identifier2.innerText = "joinedArray";
// --------------------------------------------
const arr = [1, 2, 3];
const joinedArray = arr.join(" - ");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.join(" - "): ${joinedArray}`;
