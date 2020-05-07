
var amountWin = [];
var numbers = [];
var lines = [];

function generateRandNubber(maxNumber, minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function generateLotaryTicket(numberOfLines, elementsInLine) {
    numbers = [];

    for (f = 0; f < numberOfLines; f++) {
        lines = [];
        for (i = 0; i < elementsInLine; i++) {
            lines.push(generateRandNubber(3, 0));
        }
        numbers.push(lines);
    }
    return numbers;
}

function ticketCheck() {
    for (c = 0; c < lines.length; c++) {
        if (numbers[0][c] == numbers[1][c] && numbers[0][c] == numbers[2][c]) {
            amountWin.push("1");
        }
    }
}

function lotery(amountTicket) {

    for (q = 0; q < amountTicket; q++) {
        ticketCheck();
    }
    return amountWin.length
}
console.log(generateLotaryTicket(3, 3));
console.log('you win ' + lotery(prompt('how many tickets do you have?', [0])) + ' times');

console.log(Math.random().toString(36).substr(2, 5));