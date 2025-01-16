// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "date().getFullYear():";
textName.innerText = "Returns the month (0-11) of a date.";
identifier1.innerText = identifier2.innerText = "currentMonth";
// --------------------------------------------
const currentMonth = new Date().getMonth();
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `new Date().getMonth(): ${currentMonth}`;
