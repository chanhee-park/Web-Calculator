var output, operator, zero, dot;
var $result = $("#result");

$(".btn__number").click(function () {
    output = $result.text($result.text() + this.value).text();
    console.log(output);
});

$(".btn__operator").click(function () {
    operator = this.value;
    if (!($result.text() === "")) {
        $result.text(output + operator);
        console.log(output);
    }
});

// $("#calculate").click(function () {
document.getElementById("calculate").addEventListener("click", function () {
    zero = this.value;
    if ($result.text() === "") {
        output = $result.text(zero).text();
    }
    else if ($result.text() === output) {
        output = $result.text($result.text() + zero).text();
    }
}, false);

// $("#dot").click(function () {
document.getElementById("dot").addEventListener("click", function () {
    dot = this.value;
    if ($result.text() === "") {
        output = $result.text("0.").text();
    }
    else if ($result.text() === output) {
        $result.text($result.text() + ".");
    }
}, false);

// $("#calculate").click(function () {
document.getElementById("calculate").addEventListener("click", function () {
    if ($result.text() === output) {
        output=$result.text(eval(output)).text();
    }
    else {
        $result.text("");
    }
}, false);

// $("#delete").click(function () {
document.getElementById("delete").addEventListener("click", function () {
    $result.text("");
}, false);