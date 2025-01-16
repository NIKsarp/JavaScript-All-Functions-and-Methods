// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "array.join():";
identifier1.innerText = identifier2.innerText = "joinedArray";
// --------------------------------------------
const arr = [1, 2, 3];
const joinedArray = arr.join(" - ");
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `arr.join(" - "): ${joinedArray}`;
