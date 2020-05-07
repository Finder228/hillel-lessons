
var book = {};
var possible = "abcdefghijklmnopqrstuvwxyz";
var maxLeanth = prompt('enter the maximum word length');
var minLeanth = prompt('enter the minimum word length');
var numberWords = prompt('enter the number of words');
function generateRandNubber(maxNumber, minNumber) {
    return Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
}

for (a = 0; a < numberWords; a++) {
    var textLendth = generateRandNubber(maxLeanth, minLeanth);
    var text = "";
    for (var i = 0; i < textLendth; i++) {
        text += possible[generateRandNubber(0, possible.length)];
    }
    if (book[textLendth]) {
        book[textLendth].push(text);
    }
    else { book[textLendth] = [text] }

}
for (var key in book) {
    console.log('you have ' + book[key].length +
        ' wors wiht leanth of ' + key);
}

console.log(book);
