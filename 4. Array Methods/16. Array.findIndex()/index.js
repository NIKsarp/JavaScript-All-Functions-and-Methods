// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.findIndex():";
identifier1.innerText = identifier2.innerText = "findIndexArray";
// --------------------------------------------
const arr = [1, 2, 3];
const findIndexArray = arr.findIndex((num) => num > 1);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `arr.findIndex((num) => num > 1): ${findIndexArray}`;
