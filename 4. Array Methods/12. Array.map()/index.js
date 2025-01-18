// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.map():";
identifier1.innerText = identifier2.innerText = "mapArray";
// --------------------------------------------
const arr = [1, 2, 3];
const mapArray = arr.map((num) => num * 2);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `arr.map((num) => num * 2): ${mapArray}`;
