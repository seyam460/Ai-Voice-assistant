let currentinput = "";
let operator = "";
let firstvalue = "";


function appendNumber(number) {
    currentinput += number;
    document.getElementById("display").value = currentinput;


}

function setOperator(op) {
    if(currentinput === "") return; // Prevent setting operator without a number
    firstvalue = currentinput;
    operator = op;
    currentinput = "";


}


function calculate() {
    if(currentinput === "" || firstvalue === "" || operator === "") return; // Prevent calculation without complete input
    let result;
    let num1 = parseFloat(firstvalue);
    let num2 = parseFloat(currentinput);

    switch(operator) {
        case "+" :
            result = num1 + num2;
            break;

        case "-" :
            result = num1 - num2;
            break;
        
        case "*" :
            result = num1 * num2;
            break;
        
        case "/" :
            result = num1 / num2;
            break;
        
        default :
            return;
    }

document.getElementById("display").value = result;
currentinput = result.toString();
operator = "";
firstvalue = "";

}


function clearDisplay() {
    currentinput = "";
    operator = "";
    firstvalue = "";
    document.getElementById("display").value = "0";
}