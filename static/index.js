// --------------------------------------------
const constant = document.getElementById(`constant`);
const operand = document.getElementById(`operand`);
const functionName = document.getElementById(`functionName`);
const functionMethod = document.getElementById(`functionMethod`);
// --------------------------------------------
constant.innerText = "const";
operand.innerText = "=";
functionName.innerText = "document";
functionMethod.innerText = ".write";
// --------------------------------------------
const copiedBtn = document.createElement("span");
copiedBtn.className = "copy-text-done";
copiedBtn.innerText = "copied";
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
