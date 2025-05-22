let sum = 0;
let num;
do {
    num = prompt("Type a number; when you're done," +
        "click Cancel:", 1);
    sum += Number(num);
}
while (num !== null || sum ===0);
document.writeln("The total of your numbers is" + num);
