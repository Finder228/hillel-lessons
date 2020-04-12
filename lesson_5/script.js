/*
function multiplicityOfNumbers() {

    let multiplicity = 3;// document.getElementById('multiplicity').value;
    let amountOfNumbers = 3;// document.getElementById('amountOfNumbers').value;

    let numbers = [];
    let length = numbers.length;

    do {
        let counter = 0;
        let number = counter % multiplicity;


        if (number == 0) {
            numbers.push(counter);
        }
        counter++

    } while (length < amountOfNumbers);

    alert(numbers);



}
*/

let numbers = [];
let a = 1;
let b = numbers.length;
let c = 3;
let d = 4;

for (let i = a; b < d; i++) {
    if (!(i % c)) {
        numbers.push(i);
    }
}
alert(numbers);
/*
let numbers = 5;
var points = new Array(numbers);
console.log(points);
*/