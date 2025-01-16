// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.min():";
textName.innerText = "Returns the smallest of zero or more numbers.";
identifier1.innerText = identifier2.innerText = "minValue";
// --------------------------------------------
const minValue = Math.min(10, 20, 30, 5);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `Math.min(10, 20, 30, 5): ${minValue}`;
