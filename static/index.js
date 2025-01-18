// --------------------------------------------
const content1 = document.getElementById(`content1`);
const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;
  textContent && element.appendChild(document.createTextNode(textContent));
  return element;
};
const contentTitle = createElement(`h2`, `title`);
const contentText = createElement(`p`, `text`);
contentTitle.id = `titleName`;
contentText.id = `textName`;
content1.append(contentTitle, contentText);
// --------------------------------------------
// selecting-elements by id and class
const functionScopeConst =
  document.getElementsByClassName(`function-scope-const`);
const operand = document.getElementById(`operand`);
const functionName = document.getElementById(`functionName`);
const functionMethod = document.getElementById(`functionMethod`);
// --------------------------------------------
const dollarCurlyBracesOpen = document.getElementsByClassName(
  `dollar-curly-braces-open`
);
const dollarCurlyBracesClose = document.getElementsByClassName(
  `dollar-curly-braces-close`
);
// --------------------------------------------
// const
const functionScopeConstLength = functionScopeConst.length;
for (let index = 0; index < functionScopeConstLength; index++) {
  const element = functionScopeConst[index];
  element.appendChild(document.createTextNode(`const`));
}
// --------------------------------------------
// curlyBraces
const dollarCurlyBracesOpenLength = dollarCurlyBracesOpen.length;
const dollarCurlyBracesCloseLength = dollarCurlyBracesClose.length;
for (let index = 0; index < dollarCurlyBracesOpenLength; index++) {
  const element = dollarCurlyBracesOpen[index];
  element.appendChild(document.createTextNode(`\${`));
}
for (let index = 0; index < dollarCurlyBracesCloseLength; index++) {
  const element = dollarCurlyBracesClose[index];
  element.appendChild(document.createTextNode(`}`));
}
// --------------------------------------------
// innerText
operand.appendChild(document.createTextNode(`=`));
functionName.appendChild(document.createTextNode(`document`));
functionMethod.appendChild(document.createTextNode(`.write`));
// --------------------------------------------
// copyBtn
const copyBtn = document.getElementById(`copyBtn`);
const copiedBtn = createElement(`span`, `copy-text-done`, `copied`);
const textContent = document.getElementById(`textContent`);
copyBtn.addEventListener(`click`, () => {
  copyBtn.appendChild(copiedBtn);
  navigator.clipboard.writeText(textContent.innerText);
  setTimeout(() => {
    copiedBtn.remove();
  }, 3000);
});
// --------------------------------------------
