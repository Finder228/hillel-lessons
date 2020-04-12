
function f1() {

    var userAge = document.getElementById('age').value;
    var userExperience = document.getElementById('experience').value;
    var userCriminal = document.getElementById('criminal').value;
    var requiredAge = 30;
    var requiredExpiriance = 3;
    var requiredCriminal = 0;


    var message = (userAge >= requiredAge && userExperience >= requiredExpiriance && userCriminal <= requiredCriminal) ?
        out.innerHTML = 'Поздравляем, вы приняты!' : out.innerHTML = 'К сожалению вы не приняты!'


    alert(message);

}
