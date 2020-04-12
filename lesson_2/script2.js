
function f1() {

  var usernum = document.getElementById('mynum').value;
  var secondUsernum = document.getElementById('mynum2').value;

  if (usernum == secondUsernum) {
    out.innerHTML = 'Числа равны';
  }
  else if (usernum > secondUsernum) {
    out.innerHTML = 'Первое число больше';
  }

  else {
    out.innerHTML = 'Второе число больше';
  }
}  
