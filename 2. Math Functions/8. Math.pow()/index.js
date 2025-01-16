// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.pow():";
textName.innerText = "Returns the base raised to the power of the exponent.";
identifier1.innerText = identifier2.innerText = "powValue";
// --------------------------------------------
const powValue = Math.pow(2, 3);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `Math.pow(2, 3): ${powValue}`;
