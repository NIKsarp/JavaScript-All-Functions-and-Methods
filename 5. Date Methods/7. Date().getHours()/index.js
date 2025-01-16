// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "date().getHours():";
textName.innerText = "Returns the hour (0-23) of a date.";
identifier1.innerText = identifier2.innerText = "currentHours";
// --------------------------------------------
const currentHours = new Date().getHours();
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `new Date().getHours(): ${currentHours}`;
