// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.includes():";
identifier1.innerText = identifier2.innerText = "includeArray";
// --------------------------------------------
const arr = [1, 2, 3];
const includeArray = arr.includes(1);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `arr.includes(1): ${includeArray}`;
