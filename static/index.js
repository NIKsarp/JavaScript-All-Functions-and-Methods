// --------------------------------------------
const content1 = document.getElementById(`content1`);
const contentTitle = document.createElement("h2");
const contentText = document.createElement("p");
contentTitle.className = "title";
contentText.className = "text";
contentTitle.id = "titleName";
contentText.id = "textName";
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
  element.innerText = `const`;
}
// --------------------------------------------
// curlyBraces
const dollarCurlyBracesOpenLength = dollarCurlyBracesOpen.length;
const dollarCurlyBracesCloseLength = dollarCurlyBracesClose.length;
for (let index = 0; index < dollarCurlyBracesOpenLength; index++) {
  const element = dollarCurlyBracesOpen[index];
  element.innerText = "${";
}
for (let index = 0; index < dollarCurlyBracesCloseLength; index++) {
  const element = dollarCurlyBracesClose[index];
  element.innerText = "}";
}
// --------------------------------------------
// innerText
operand.innerText = `=`;
functionName.innerText = `document`;
functionMethod.innerText = `.write`;
// --------------------------------------------
// copyBtn
const copiedBtn = document.createElement(`span`);
copiedBtn.className = `copy-text-done`;
copiedBtn.innerText = `copied`;
// --------------------------------------------
const copyBtn = document.getElementById(`copyBtn`);
const textContent = document.getElementById(`textContent`);
copyBtn.addEventListener(`click`, () => {
  copyBtn.appendChild(copiedBtn);
  navigator.clipboard.writeText(textContent.innerText);
  setTimeout(() => {
    copiedBtn.remove();
  }, 3000);
});
// --------------------------------------------
