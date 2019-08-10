let elem = document.querySelectorAll("[class=calcButton]");
let display = document.querySelector("[class=display]");
let var1 = "";
let var2 = "";
let operand = "";
let temp;
let answer;


elem.forEach((button) => {
    button.addEventListener("click", () => {
        temp = button.getAttribute("data-num").toString();
        if(temp != "/" && temp != "-" && temp != "+" && temp != "*" && temp != "enter" && temp != "clear" && var2 == "" && operand == ""){
        var1 += temp;
        fillDisplay(var1);
        }

        if(temp != "/" && temp != "-" && temp != "+" && temp != "*" && temp != "enter" && temp != "clear" && operand != ""){
            var2 += temp;
            fillDisplay(var2);
        }  

        if (temp == "/" || temp == "*" || temp == "+" || temp == "-"){
            operand = temp;
            var2 == "1";
        }

        if (temp == "enter") {
            if (var1 == 0 && var2 == 0 && operand == "/"){
                fillDisplay("Cannot divide by zero");
                displayClear();
                return;               
            }
            var1 = solveEquation(var1, var2, operand);
            fillDisplay(var1);
            var2 = ""; 
        }

        if (temp == "clear") {
            displayClear();
        }


    })
})

function fillDisplay(i) {
    display.textContent= i;
}

function solveEquation(a, b, op) {
    let solution = 0;
    a = parseFloat(a);
    b = parseFloat(b);

    if (op == "/") {
        solution = a / b;
        return solution;
    }

    if (op == "*") {
        solution = a * b;
        return solution;
    }

    if (op == "+") {
        solution = a + b;
        return solution;
    }

    if (op == "-") {
        solution = a - b;
        return solution;
    }
}

function displayClear() {
    display.textContent = "";
    var1 = "";
    var2 = "";
    operand = "";
}