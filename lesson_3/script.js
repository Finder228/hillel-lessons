/*
function f1() {

    var userAge = document.getElementById('mynum').value;

    if (userAge >= 18) {
        out.innerHTML = 'Поздравляем у вас есть доступ к сервису';
    }
    else if (12 <= userAge && userAge < 18) {
        out.innerHTML = 'В доступе отказано';
    }

    else if (userAge < 12) {
        out.innerHTML = 'Молодой человек, не советую вам пользоватся данным сервисом';
    }
}
*/
function f1() {
    var userAge = document.getElementById('mynum').value;
    var message = (userAge >= 18) ?
        out.innerHTML = 'Поздравляем у вас есть доступ к сервису' :
        (12 <= userAge && userAge < 18) ?
            out.innerHTML = 'В доступе отказано' :
            (userAge < 12) ?
                out.innerHTML = 'Молодой человек, не советую вам пользоватся данным сервисом' :
                alert(message);
}