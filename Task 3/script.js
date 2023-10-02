let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator;
        previousInput = currentInput;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    if (currentInput !== '' && previousInput !== '' && currentOperator !== '') {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (currentOperator) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '/':
                if (num2 !== 0) {
                    currentInput = (num1 / num2).toString();
                } else {
                    currentInput = 'Error';
                }
                break;
        }

        previousInput = '';
        currentOperator = '';
        document.getElementById('result').value = currentInput;
    }
}
