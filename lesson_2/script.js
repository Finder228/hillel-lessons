let numbers = [];
let firstNumber = prompt('input 1 number?', 0);
let secondNumber = prompt('input 2 number?', 0);
let thirdNumber = prompt('input 3 number?', 0);
numbers.push(firstNumber);
numbers.push(secondNumber);
numbers.push(thirdNumber);

let numbersSum = 0;
let itemsFound = 0;
const len = numbers.length;
let item = 0;
for (let i = 0; i < len; i++) {
    item = numbers[i];
        numbersSum = parseInt(numbersSum) + parseInt(item);
        itemsFound = itemsFound + 1;  
}
const mean = numbersSum / itemsFound;
console.log("mean of numbers:", mean);  
console.log(len);
console.log(numbersSum);