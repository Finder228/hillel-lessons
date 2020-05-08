function showHours(userDate, userMonth, userDay) {
  var time = Date.parse(userDate + '-' + userMonth + '-' + userDay);

  var date = new Date();
  var now = date.getTime();

  var result = now - time;
  result = result / (1000 * 60 * 60);
  console.log(Math.floor(result));
}

showHours((prompt('Input year')), (prompt('Input month')), (prompt('Input day')));

