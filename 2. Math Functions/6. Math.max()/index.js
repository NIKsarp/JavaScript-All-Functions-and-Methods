// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.max():";
textName.innerText = "Returns the largest of zero or more numbers.";
identifier1.innerText = identifier2.innerText = "maxValue";
// --------------------------------------------
const maxValue = Math.max(10, 20, 30, 5);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `Math.max(10, 20, 30, 5): ${maxValue}`;
