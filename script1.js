const preTipTotal = 100.00;
const tipPercentage = 0.15;

// Declare tipCost using an arrow function implicit retrun
const tipCost = (preTip, tipPercent) => preTip * tipPercent;

const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
document.write("Your total bill is $" + totalBill);
