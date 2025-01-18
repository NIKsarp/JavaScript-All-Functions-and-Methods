// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.appendChild(document.createTextNode(`math.random():`));
textName.appendChild(
  document.createTextNode(
    `Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).`
  )
);
// --------------------------------------------
const identifier = `randomValue`;
identifier1.appendChild(document.createTextNode(identifier));
identifier2.appendChild(document.createTextNode(identifier));
// --------------------------------------------
const randomValue = Math.random();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.appendChild(
  document.createTextNode(`Math.random(): ${randomValue}`)
);
