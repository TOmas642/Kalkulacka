const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};
function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}
updateDisplay();

function inputDigit(digit) {
  if (calculator.firstOperand === null) {
    calculator.firstOperand = parseFloat(calculator.displayValue);
  } else if (calculator.displayValue === "0") {
    const result = performCalculation;

    calculator.displayValue = calculator.displayValue + digit;
  }
}
function handleOperator(nextOperator) {
  if (calculator.firstOperand === null) {
    calculator.firstOperand = parseFloat(calculator.displayValue);
  } else if (calculator.operator) {
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}
const performCalculation = {
  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
  "=": (firstOperand, secondOperand) => secondOperand
};
function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", event => {
  const { target } = event;
  if (!target.matches("button")) {
    //Stisknuto něco jiného než tlačítko
    return;
  }
  if (target.classList.contains("equal-sign operator")) {
    calculator.displayValue = calculator.displayValue + target.value;
    updateDisplay();
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator();
    updateDisplay();
    return;
  }
  if (target.classList.contains("all-clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
