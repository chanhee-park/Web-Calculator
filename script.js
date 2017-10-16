var result, operator, output, zero, dot;
result = document.getElementById("result");

var btn_number = document.getElementsByClassName("btn__number");
for (var i = 0; i < btn_number.length; i++) btn_number[i].addEventListener("click", function () {
    output = result.innerHTML += this.value;
}, false);

var btn_operator = document.getElementsByClassName("btn__operator");
for (var i = 0; i < btn_operator.length; i++) btn_operator[i].addEventListener("click", function () {
    operator = this.value;
    if (result.innerHTML === "") {
        result.innerHTML = "";
    }
    else if (output) {
        result.innerHTML = output + operator;
    }
}, false);


document.getElementById("zero").addEventListener("click", function () {
    zero = this.value;
    if (result.innerHTML === "") {
        output = result.innerHTML = zero;
    }
    else if (result.innerHTML === output) {
        output = result.innerHTML += zero;
    }
}, false);

document.getElementById("dot").addEventListener("click", function () {
    dot = this.value;
    if (result.innerHTML === "") {
        output = result.innerHTML += "0.";
    }
    else if (result.innerHTML === output) {
        result.innerHTML += ".";
    }
}, false);


document.getElementById("calculate").addEventListener("click", function () {
    if (result.innerHTML === output) {
        output = result.innerHTML = eval(output);
    }
    else {
        result.innerHTML = "";
    }
}, false);

document.getElementById("delete").addEventListener("click", function () {
    result.innerHTML = "";
}, false);