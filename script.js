
document.getElementById("inputNumber").addEventListener("input", function() {
    var input = parseInt(this.value);
    var output = document.getElementById("output");
    output.innerHTML = "";

    if (isNaN(input)) {
        output.innerHTML = "";
    } else if (input < 0) {
        output.innerHTML = "Enter a positive value";
    } else if (input % 2 === 0) {
        var evenNumbers = [];
        for (var i = 1; i <= 3; i++) {
            evenNumbers.push(input + (i * 2));
        }
        output.innerHTML = "Next 3 even numbers: " + evenNumbers.join(", ");
    } else {
        var oddNumbers = [];
        for (var i = 1; i <= 3; i++) {
            oddNumbers.push(input +(i * 2));
        }
        output.innerHTML = "Next 3 odd numbers: " + oddNumbers.join(", ");
    }
});


