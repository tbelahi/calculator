const add = function (a, b) {
    return a + b;
}

const substract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (operator, leftOperand, rightOperand) {
    let result;
    switch (operator) {
        case "add":
            result = add(leftOperand, rightOperand);
            break;
        case "substract":
            result = substract(leftOperand, rightOperand);
            break;
        case "multiply":
            result = multiply(leftOperand, rightOperand);
            break;
        case "divide":
            result = divide(leftOperand, rightOperand);
            break;
        default:
            console.error("not a valid operation");
    }
    return result;
}

let leftOperand;
let rightOperand;
let runningResult;
let operator;
let inputs = [];

const pad = document.querySelector(".pad");
const screen = document.querySelector(".screen")

/**
 * 
 
pad.addEventListener("click", function (e) {
    if (e.target.id==="compute"){
        displayValue = eval(inputs.map(elem => elem.textContent).join(''));
        elem = document.createElement("div")
        elem.textContent = displayValue;
        inputs = [elem];
    }
    else {
        inputs.push(e.target);
        displayValue = inputs.map(elem => elem.textContent).join(' ');
    }
    screen.textContent = displayValue;
})
*/

const round = function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

let previous = "init";

pad.addEventListener("click", function (e) {
    switch (e.target.className) {
        case "digit":
            switch (previous) {
                case "init":
                    leftOperand = e.target.textContent;
                    displayValue = leftOperand;
                    previous = "leftOperand";
                    break;
                case "leftOperand":
                    leftOperand += e.target.textContent;
                    displayValue = leftOperand;
                    previous = "leftOperand"
                    break;
                case "operator":
                    rightOperand = e.target.textContent;
                    displayValue = rightOperand;
                    previous = "rightOperand";
                    break;
                case "rightOperand":
                    rightOperand += e.target.textContent;
                    displayValue = rightOperand;
                    previous = "rightOperand";
                    break;
                case "result":
                    leftOperand = e.target.textContent;
                    displayValue = leftOperand;
                    previous = "leftOperand";
                    break;
            }
            break;
        case "operator":
            console.log("hello");
            console.log(e.target.id)
            switch (e.target.id) {
                case "compute":
                    console.log("compute");
                    displayValue = round(
                        operate(operator, parseFloat(leftOperand), parseFloat(rightOperand)),
                        6);
                    previous = 'result';
                    break;
                case "clear":
                    console.log("clear");
                    displayValue = "";
                    previous = "init";
                    break;
                case "percent":
                    console.log("percent");
                    displayValue = round(parseFloat(displayValue) / 100, 6);
                    previous = "init";
                    break;
                case "comma":
                    console.log("comma");
                    switch (previous) {
                        case "leftOperand":
                            leftOperand += ".";
                            displayValue = leftOperand;
                            previous = "leftOperand"
                            break;
                        case "rightOperand":
                            rightOperand += ".";
                            displayValue = rightOperand;
                            previous = "rightOperand";
                            break;
                    }
                // TODO : implementer parentheses et erase
                case "parentheses":
                    break;
                case "erase":
                    break;
                default: // add, divide, substract, multiply
                        switch(previous) {
                            case "init":
                                break;
                            case "leftOperand":
                                operator = e.target.id;
                                displayValue = e.target.textContent;
                                previous = 'operator';
                                break;
                            case "operator":
                                break;
                            case "rightOperand":
                                leftOperand = operate(operator, parseFloat(leftOperand), parseFloat(rightOperand));
                                operator = e.target.id;
                                displayValue = e.target.textContent;
                                previous = "operator";
                                break;
                            case "result":
                                leftOperand = displayValue;
                                operator = e.target.id;
                                displayValue = e.target.textContent;
                                previous = "operator";
                                break;
                        }
                    break;
            }
            break;
    }
    console.log("here")
    screen.textContent = displayValue;
})



