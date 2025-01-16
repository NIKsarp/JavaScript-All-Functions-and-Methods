// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.pop():";
identifier1.innerText = identifier2.innerText = "arr";
// --------------------------------------------
const arr = [1, 2, 3];
arr.pop();
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `arr.pop(): ${arr}`;
