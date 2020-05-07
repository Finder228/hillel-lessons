function generateRandNubber(maxNumber, minNumber) {
  return Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
}

var counter = 1;
function check(usernum, number) {
  var userWin = false;
  if ((usernum == number)) {
    alert('Congratulations, you guessed right');
    userWin = true;
  }
  else if (usernum < number) {
    alert("not enough, it's yours: " + counter + ' try');
  }

  else if (usernum > number) {
    alert('too much, this is yours: ' + counter + ' try');
  }
  ++counter;
  return userWin;
}

function request() {
  var botNumber = generateRandNubber(10, 1);
  do {
    check(prompt('enter a number from 1 to 10'), botNumber)
  }
  while (!(check(prompt('enter a number from 1 to 10'), botNumber)))
  console.log(botNumber);
}

request();