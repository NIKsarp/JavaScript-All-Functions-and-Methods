// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "eval():";
textName.innerText = "Evaluates JavaScript code represented as a string.";
identifier1.innerText = identifier2.innerText = "evalValue";
// --------------------------------------------
const evalValue = eval("5 + 5");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `eval("5 + 5"): ${evalValue}`;
