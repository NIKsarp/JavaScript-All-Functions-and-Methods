// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "date().getDate():";
textName.innerText = "Returns the day of the week (0-6, where 0 is Sunday).";
identifier1.innerText = identifier2.innerText = "currentDate";
// --------------------------------------------
const currentDate = new Date().getDate();
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `new Date().getDate(): ${currentDate}`;
