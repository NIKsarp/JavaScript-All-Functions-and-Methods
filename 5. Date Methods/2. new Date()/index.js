// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`new Date():`));
textName.appendChild(document.createTextNode(`Creates a new Date object.`));
// --------------------------------------------
const identifier = `currentDate`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const currentDate = new Date();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(document.createTextNode(`new Date(): ${currentDate}`));
