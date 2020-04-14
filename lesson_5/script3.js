var number = Math.floor(10 * Math.random()) + 1; // случайное число от 1 до 10
console.log(number);

var usernum = 0;
var counter = 1;

do {
  usernum = Number(prompt('Угадайте число от 1 до 10', [0]));
  if ((usernum == number)) {
    break;
  }
  else if (usernum < number) {
    alert('Недолет, это ваша: ' + counter + ' попытка');
  }

  else if (usernum > number) {
    alert('Перелет, это ваша: ' + counter + ' попытка');
  }
  ++counter;
}
while (!(usernum == number));
alert('ПОЗДРАВЛЯЕМ, ВЫ УГАДАЛИ');





