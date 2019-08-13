
let display = document.querySelector("[class=text]");
let topDisplay = document.querySelector("[class=top-text]");
let var1 = "";
let var2 = "";
let operand = "";

let elem = document.querySelectorAll("[data-num]");
elem.forEach((button) => {
    button.addEventListener("click", e => {
        if (var1 != "" && var2 == "" && operand){
            var1 = "";
            operand = "";
        }
        let number = e.target.dataset.num;
        var1 += number.toString();
        fillDisplay(var1);
    })
})

let getOp = document.querySelectorAll("[data-op]");
getOp.forEach((button) => {
    button.addEventListener("click", e => {
        operand = e.target.dataset.op;
        topDisplay.innerText += " " + operand;
        if(var2 == "") {
            var2 = var1;
            var1 = "";
        }
    })
})

const fillDisplay = (i) => {
    if (var2 == "")
    topDisplay.innerText = `${var1}`;
    else if(var2 && operand)
        topDisplay.innerText = `${var2} ${operand} ${var1}`
    
    display.innerText = i;
}

const isEquals = document.querySelector("[data-enter]")
isEquals.addEventListener("click", e => {
    var1 = solveEquation();
    var2 = "";
    fillDisplay(var1);
})
 
const isClear = document.querySelector("[data-clear]")
isClear.addEventListener("click", e => {
    displayClear();
})


const solveEquation = () => {
    let solution = 0;
    if (var1 && var2 && operand){
    b = parseFloat(var1);
    a = parseFloat(var2);

    if (b == "0")
        return "You cannot divide by zero";

    switch(operand) {
        case "/": 
            solution = a / b; 
            solution = solution.toPrecision(4);
            return solution.toString();
        case "*": 
            solution = a * b; 
            solution.toPrecision(4);
            return solution.toString();
        case "+": 
            solution = a + b; 
            return solution;
        case "-": 
            solution = a - b;
            return solution;   
        }
    }
    else{
        displayClear();
        return "";
    }
}

const displayClear = () => {
    display.textContent = "0";
    topDisplay.textContent = "0";
    var1 = "";
    var2 = "";
    operand = "";
}