function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    display.innerText = eval(display.innerText);
}
