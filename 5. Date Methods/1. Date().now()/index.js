// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "date.now():";
textName.innerText =
  "Returns the current timestamp in milliseconds since January 1, 1970.";
identifier1.innerText = identifier2.innerText = "now";
// --------------------------------------------
const now = Date.now();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `Date.now(): ${now}`;
