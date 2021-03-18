//Construyendo un objeto:
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector(".calc-display");
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

/*
function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
  
  if(displayValue === '0'){
    calculator.displayValue=digit;
  }else{
    calculator.displayValue=digit+displayValue;
  }
  
  console.log(calculator);
}
*/

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  // If the `displayValue` property does not contain a decimal point
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);

    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

const keys = document.querySelector(".calc-box-buttons");
keys.addEventListener("click", (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function

  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    //console.log("operator", target.value);
    handleOperator(target.value);
    updateDisplay();

    return;
  }

  if (target.classList.contains("decimal")) {
    //console.log("decimal", target.value);
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    //console.log("clear", target.value);
    resetCalculator();
    updateDisplay();
    return;
  }

  // console.log(target);
  // console.log(target.id);
  // console.log("digit", target.value);
  inputDigit(target.value);
  updateDisplay();
});

updateDisplay();
