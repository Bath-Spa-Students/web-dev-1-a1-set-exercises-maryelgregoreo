 // load the DOM content 
document.addEventListener ("DOMContentLoaded", function() {

    // references to the elements needed for calculation
    calculateBtn = document.getElementById ("calculate-btn");
    costInput = document.getElementById ("liter-cost");
    amountInput = document.getElementById ("amount-of-liter");
    totalCostDisplay = document.getElementById ("total-cost");

    // function to calculate the total cost 
    function calculateTotalCost () {

        // cost per liter from the input 
        var costPerLiter = parseFloat (costInput.value);

        // amount of liter from input
        var amountOfLiter = parseFloat (amountInput.value);

        // calculate the total cost
        var totalCost = costPerLiter * amountOfLiter;

        // display the total cost with two decimal places
        totalCostDisplay.textContent = "Total Cost: $" + totalCost.toFixed (2);
    }

    // interact with calculate button to trigger the calculation
    calculateBtn.addEventListener ("click", calculateTotalCost);

});

