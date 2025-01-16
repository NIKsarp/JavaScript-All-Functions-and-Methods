// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.reduce():";
identifier1.innerText = identifier2.innerText = "reducedArray";
// --------------------------------------------
const arr = [1, 2, 3];
const reducedArray = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0): ${reducedArray}`;
