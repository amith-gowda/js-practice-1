//Challenge 1: Your age in days

function ageInDays () {
    if (document.contains(document.getElementById('ageInDays'))) {
        document.getElementById('ageInDays').remove();
    }
    var birthYear = prompt('What year were you born in?');
    var days = (2020 - birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + days + ' days old') ;
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('fbResult').appendChild(h1);
}

//Challenge 2: