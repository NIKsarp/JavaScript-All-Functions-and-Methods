// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.isArray():";
identifier1.innerText = identifier2.innerText = "isArrayCheck";
// --------------------------------------------
const isArrayCheck = Array.isArray([1, 2, 3]);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `Array.isArray([1, 2, 3]): ${isArrayCheck}`;
