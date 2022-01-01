const operands = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
    ".": true
}
window.onload = function() {
    const buttons = document.getElementsByClassName("button");
    const initialise = document.getElementsByClassName("equal")[0];
    const reset = document.getElementsByClassName("reset")[0];
    const removeLast = document.getElementsByClassName("del")[0];
    for (let iteration = 0; iteration < buttons.length; iteration++) {
        buttons[iteration].onclick = () => {
            if (!filterOperands(document.calc.text.value, buttons[iteration].textContent)) return;
            document.calc.text.value = prettifyNumber((document.calc.text.value + buttons[iteration].textContent).replace(/x/, '*'));
        }
    }
    initialise.onclick = () => {
        if (operands[document.calc.text.value.charAt(document.calc.text.value.length - 1)]) document.calc.text.value = document.calc.text.value.slice(0, -1);
        document.calc.text.value = prettifyNumber(eval(document.calc.text.value.replace(/,/, '')).toString());
    }
    reset.onclick = () => {
        document.calc.text.value = "";
    }
    removeLast.onclick = () => {
        document.calc.text.value = prettifyNumber(document.calc.text.value.slice(0, -1));
    }
}
function isValidLength(string) {
    return string.length > 0 ? true : false;
}
function filterOperands(string, addition) {
    if (!operands[addition]) return true;
    if (!isValidLength(string)) return false;
    if (isNaN(string.charAt(string.length - 1))) return false;
    return true;
}
function prettifyNumber(string) {
    return string.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(isNaN("1,000".replace(/,/, "")));