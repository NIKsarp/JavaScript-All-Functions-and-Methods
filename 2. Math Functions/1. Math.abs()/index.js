// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.abs():";
textName.innerText = "Returns the absolute value of a number.";
identifier1.innerText = identifier2.innerText = "absValue";
// --------------------------------------------
const absValue = Math.abs(-42);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `Math.abs(-42): ${absValue}`;
