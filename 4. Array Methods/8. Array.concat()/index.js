// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.concat():";
identifier1.innerText = identifier2.innerText = "concatArray";
// --------------------------------------------
const arr = [1, 2, 3];
const concatArray = arr.concat([4, 5]);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `arr.concat(4, 5): ${concatArray}`;
