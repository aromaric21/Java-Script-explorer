const preTipTotal = 100.00;
const tipPercentage = 0.15;

// Declare tipCost using an arrow function implicit retrun
const tipCost = (preTip, tipPercent) => preTip * tipPercent;

const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
document.write("Your total bill is $" + totalBill);



// String Object Methods for Searching for Substrings
// string.endsWith(substring, start)
// string.includes(substring, start)
// string.indexOf(substring, start)
// string.lastIndexOf(substring, start)
// string.startsWith(substring, start)


// String Object Methods for Extracting Substrings
// string.charAt(index)
// string.charCodeAt(index)
// string.slice(start, end)
// string.split(separator, limit)
// string.substr(start, length)
// string.substring(start, end)