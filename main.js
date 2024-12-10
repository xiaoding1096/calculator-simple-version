const displayInput = document.getElementById("display-input");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log(value);
    if (value === "AC") {
      currentInput = "";
      previousInput = "";
      operator = "";
      displayInput.value = "";
    } else if (value === "=") {
      if (currentInput && previousInput && operator) {
        let numb1 = parseFloat(previousInput);
        let numb2 = parseFloat(currentInput);
        let result;
        switch (operator) {
          case "+":
            result = numb1 + numb2;
            break;
          case "-":
            result = numb1 - numb2;
            break;
          case "*":
            result = numb1 * numb2;
            break;
          case "/":
            result = numb2 !== 0 ? numb1 / numb2 : "Error";
            break;
          default:
            result = "Error";
        }

        displayInput.value = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (value === "%") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        displayInput.value = currentInput;
      }
    } else {
      if (value === "." && currentInput.includes(".")) {
        return;
      }
      currentInput += value;
      displayInput.value = currentInput;
    }
  });
});
