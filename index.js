const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

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

document.getElementById('dark-mode-toggle').addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.target.checked);
});

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