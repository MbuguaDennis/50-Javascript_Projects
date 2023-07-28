// Select elements by IDs and Classes
const display = document.getElementById('display');
const operatorButtons = document.querySelectorAll('.operator-btn');
const numberButtons = document.querySelectorAll('.num-btn');
const clearButton = document.querySelector('.clear-btn');
const calculateButton = document.getElementById('equals-btn');

// Current input value
let currentInputExpression = '';
let result = 0;

// Function to update display value
function updateDisplay() {
  display.value = currentInputExpression;
}

// Clear button function
function clearDisplay() {
  currentInputExpression = '';
  result = 0;
  updateDisplay();
}

// Calculate function
function calculate() {
  try {
    result = eval(currentInputExpression);
    currentInputExpression = result.toString();
    updateDisplay();
  } catch (error) {
    currentInputExpression = 'Error';
    updateDisplay();
  }
}

// Perform function in each of the button
// Use forEach method
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentInputExpression += button.textContent;
    updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentInputExpression += button.textContent;
    updateDisplay();
  });
});

clearButton.addEventListener('click', clearDisplay);
calculateButton.addEventListener('click', calculate);
