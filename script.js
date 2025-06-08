console.log("script.js is loaded"); // Debug to confirm script loading

function calculate() {
    console.log("Calculate function called"); // Debug to confirm button click
    // Get input values
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;
    const resultsDiv = document.getElementById("results");

    // Convert inputs to numbers
    const num1 = parseInt(num1Input);
    const num2 = parseInt(num2Input);

    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        resultsDiv.innerHTML = '<p class="error">Please enter valid integers.</p>';
        return;
    }
    if (num1 < -1000 || num1 > 1000 || num2 < -1000 || num2 > 1000) {
        resultsDiv.innerHTML = '<p class="error">Numbers must be between -1000 and 1000.</p>';
        return;
    }

    // Perform calculations
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    let quotient;
    if (num2 === 0) {
        quotient = "undefined (division by zero)";
    } else {
        quotient = (num1 / num2).toFixed(4);
    }
    const power = Math.pow(num1, num2);

    // Display results
    resultsDiv.innerHTML = `
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Product: ${product}</p>
        <p>Quotient: ${quotient}</p>
        <p>Power: ${power}</p>
    `;
}