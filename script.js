const previousNum = document.querySelector(".previous");
const currentNum = document.querySelector(".current");
const plus = document.querySelector(".plus");
const numbers = document.querySelectorAll(".num");
const clear = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const divideZero = document.querySelector(".hidden");
const decimal = document.querySelector(".decimal");
const deletes = document.querySelector(".delete");
let selectedOperator = "";

clear.addEventListener("click", () => {
  previousNum.textContent = 0;
  currentNum.textContent = 0;
});

decimal.addEventListener("click", () => {
  if (currentNum.textContent.includes(".")) {
    return;
  } else {
    currentNum.textContent += ".";
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (currentNum.textContent === "0") {
      currentNum.textContent = e.target.textContent;
    } else if(currentNum.textContent.length >= 12) {
      return;
    } else {
      currentNum.textContent += e.target.textContent;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    previousNum.textContent = `${currentNum.textContent} ${e.target.textContent}`;
    currentNum.textContent = "0";
    return (selectedOperator = e.target.textContent);
  });
});

deletes.addEventListener("click", () => {
  if (currentNum.textContent === "0") {
    return;
  } else if (currentNum.textContent.length == 1) {
    currentNum.textContent = "0";
  } else {
    currentNum.textContent = currentNum.textContent.toString().slice(0, -1);
  }
});

equals.addEventListener("click", () => {
  previousNum.textContent += `${currentNum.textContent} = `;
  if (selectedOperator === "+") {
    currentNum.textContent = Number.parseFloat(
      (
        parseFloat(previousNum.textContent) + parseFloat(currentNum.textContent)
      ).toFixed(12)
    );
  } else if (selectedOperator === "-") {
    currentNum.textContent = Number.parseFloat(
      (
        parseFloat(previousNum.textContent) - parseFloat(currentNum.textContent)
      ).toFixed(12)
    );
  } else if (selectedOperator === "*") {
    currentNum.textContent = Number.parseFloat(
      (
        parseFloat(previousNum.textContent) * parseFloat(currentNum.textContent)
      ).toFixed(12)
    );
  } else if (selectedOperator === "÷") {
    currentNum.textContent = Number.parseFloat(
      (
        parseFloat(previousNum.textContent) / parseFloat(currentNum.textContent)
      ).toFixed(12)
    );
  }
});
