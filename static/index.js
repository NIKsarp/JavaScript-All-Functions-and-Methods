// --------------------------------------------
// content1 Start

const content1 = document.getElementById(`content1`);

const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

const contentTitle = createElement(`h2`, `title`);
const contentText = createElement(`p`, `text`);

contentTitle.id = `titleName`;
contentText.id = `textName`;

content1.append(contentTitle, contentText);

// content1 End
// --------------------------------------------
// selecting-elements by id and class

const functionScopeConst =
  document.getElementsByClassName(`function-scope-const`);

const equalToOperator = document.getElementsByClassName(`equal-to-operator`);

const domFunctionDocument = document.getElementsByClassName(
  `dom-function-document`
);

const domFunctionDocumentDotWrite = document.getElementsByClassName(
  `dom-function-document-dot-write`
);

// --------------------------------------------

const dollarCurlyBracesOpen = document.getElementsByClassName(
  `dollar-curly-braces-open`
);

const dollarCurlyBracesClose = document.getElementsByClassName(
  `dollar-curly-braces-close`
);

// --------------------------------------------
// const Start

const functionScopeConstLength = functionScopeConst.length;

for (let index = 0; index < functionScopeConstLength; index++) {
  const element = functionScopeConst[index];
  element.appendChild(document.createTextNode(`const`));
}

// const End
// --------------------------------------------
// equal-to-operator Start

const equalToOperatorLength = equalToOperator.length;

for (let index = 0; index < equalToOperatorLength; index++) {
  const element = equalToOperator[index];
  element.appendChild(document.createTextNode(`=`));
}

// equal-to-operator End
// --------------------------------------------
// curlyBraces Start

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

// curlyBraces End
// --------------------------------------------
// append TextNode Start

const domFunctionDocumentLength = domFunctionDocument.length;

for (let index = 0; index < domFunctionDocumentLength; index++) {
  const element = domFunctionDocument[index];
  element.appendChild(document.createTextNode(`document`));
}

const domFunctionDocumentDotWriteLength = domFunctionDocumentDotWrite.length;

for (let index = 0; index < domFunctionDocumentDotWriteLength; index++) {
  const element = domFunctionDocumentDotWrite[index];
  element.appendChild(document.createTextNode(`.write`));
}

// append TextNode End
// --------------------------------------------
// content2 Start

const content2 = document.getElementById(`content2`);

const copyBtn = createElement(`span`, `copy-btn`, `copy`);

const copiedBtn = createElement(`span`, `copy-text-done`, `copied`);

const textContent = document.getElementById(`textContent`);

content2.appendChild(copyBtn);

copyBtn.addEventListener(`click`, () => {
  copyBtn.appendChild(copiedBtn);

  navigator.clipboard.writeText(textContent.innerText);

  setTimeout(() => {
    copiedBtn.remove();
  }, 3000);
});

// content2 End
// --------------------------------------------
// content3 Start

const content3 = document.getElementById(`content3`);

const downArrowNavigation = createElement(`div`, `down-arrow-navigation`);

content3.appendChild(downArrowNavigation);

// content3 End
// --------------------------------------------
// content4 Start

const content4 = document.getElementById(`content4`);

const showCodeOutput = createElement(`code`, `code-output`);

showCodeOutput.id = `showAnswer`;
showCodeOutput.classList.add(`code-list`);

content4.appendChild(showCodeOutput);

// content4() Function End
// --------------------------------------------
