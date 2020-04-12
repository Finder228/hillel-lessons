var number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

var number = Math.floor(10 * Math.random()) + 1; // случайное число от 1 до 10
console.log(number);

var count = 4; // кол-во попыток

function f1() {
  if (count > 0) {
    var usernum = document.getElementById('mynum').value; // получим число введенное пользователем
    usernum = parseInt(usernum); // преобразуем в целое число

    var out = document.getElementById('out');
    if (usernum == number) {
      out.innerHTML = 'Ура! Вы угадали!';
    }
    else if (usernum > number) {
      out.innerHTML = 'Перелет...';
    }

    else if (usernum < number) {
      out.innerHTML = 'Недолет...';
    }

    document.getElementById('count').innerHTML = 'Осталось попыток: ' + count;
    count = count - 1;
  }
  else {
    alert('Попытки закончены, вы проиграли! Страница будет перезагружена.');
    location.reload(); // перезагрузка страницы
  }
}