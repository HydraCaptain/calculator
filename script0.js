let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  updateResult();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateResult();
}

function clearResult() {
  currentExpression = '';
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(currentExpression);
    currentExpression = result;
    updateResult();
  } catch (error) {
    currentExpression = '';
    updateResult();
    alert('Invalid expression!');
  }
}

function updateResult() {
  document.getElementById('result').value = currentExpression;
}
