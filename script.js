let input = '';

function appendInput(value) {
    input += value;
    document.getElementById('result').value = input;
}

function calculateResult() {
    try {
        const result = eval(input);
        document.getElementById('result').value = result;
        input = '';
    } catch (error) {
        alert('Invalid input');
    }
}

function clearResult() {
    input = '';
    document.getElementById('result').value = '';
}

function deleteDigit() {
    input = input.slice(0, -1);
    document.getElementById('result').value = input;
}
