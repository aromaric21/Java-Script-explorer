const preTipTotal = 100.00;
const tipPercentage = 0.15;

// Declare tipCost using an anonymous function
const tipCost = function(preTip, tipPercent) {
    const tipResult = preTip * tipPercent;
    return (tipResult);
}

const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
document.write("Your total bill is $" + totalBill);
