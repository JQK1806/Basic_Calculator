// Display
const display = document.getElementById("display");

// Add the input to the calculator display
function appendToDisplay(input){
    display.value += input;
}

// Empty the display
function clearDisplay(){
    display.value = "";
}

// Calculate what is in the display
function calculate(){
    const history = document.getElementById('history');
    try {
        const result = eval(display.value);
        history.innerHTML += `<div>${display.value} = ${result}</div>`;
        display.value = result;
    } catch(e) {
        display.value = "Error";
    }
}

// Delete the last value in the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Dark mode
document.getElementById('dark-mode-toggle').addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.target.checked);
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key >= "0" && key <= "9" || key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "C" || key ==="c") {
        clearDisplay();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});