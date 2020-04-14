function multiplicityOfNumbers() {
    let numbers = [];

    let multiplicity = document.getElementById('multiplicity').value;
    let amountOfNumbers = document.getElementById('amountOfNumbers').value;

    for (let с = 1; numbers.length < amountOfNumbers; с++) {
        if (!(с % multiplicity)) {
            numbers.push(с);
        }
    }
    alert(numbers);
}