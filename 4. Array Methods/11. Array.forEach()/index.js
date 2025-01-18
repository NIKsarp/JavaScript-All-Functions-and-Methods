// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`array.forEach():`));
// --------------------------------------------
const identifier = `sum`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const arr = [1, 2, 3];
let sum = 0;
arr.forEach((num) => (sum += num));
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`arr.forEach((num) => (sum += num)): ${sum}`)
);
