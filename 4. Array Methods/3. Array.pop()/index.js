// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`array.pop():`));
// --------------------------------------------
const identifier = `arr`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const arr = [1, 2, 3];
arr.pop();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`arr.pop(): ${arr}`));
