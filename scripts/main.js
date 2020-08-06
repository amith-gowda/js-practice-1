//resoponsive nav

$(function () {
    menu = $("nav ul");
  
    $("#openup").on("click", function (e) {
      e.preventDefault();
      menu.slideToggle();
    });
  
    $(window).resize(function () {
      var w = $(this).width();
      if (w > 480 && menu.is(":hidden")) {
        menu.removeAttr("style");
      }
    });
  
    $("nav li").on("click", function (e) {
      var w = $(window).width();
      if (w < 480) {
        menu.slideToggle();
      }
    });
    $(".open-menu").height($(window).height());
  });
  

//Challenge 1: Your age in days

function ageInDays() {
    if (document.contains(document.getElementById('ageInDays'))) {
        document.getElementById('ageInDays').remove();
    }
    var birthYear = prompt('What year were you born in?');
    var h1 = document.createElement('h1');
    if (birthYear >= 2021) {
        var textAnswer = document.createTextNode(birthYear + '? Are you a time traveller, bro?');
        console.log(birthYear + '? Are you a time traveller, bro?')
    }
    else if (birthYear < 1900) {
        var days = (2020 - birthYear)*365;
        var textAnswer = document.createTextNode('You are ' + days + ' days old. How are you alive, bro?');
    }
    else {
        var days = (2020 - birthYear)*365;
        var textAnswer = document.createTextNode('You are ' + days + ' days old');
    }
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('fbResult').appendChild(h1);
}

//Challenge 2: Dog Generator

function dogGen() {
    var img = document.createElement('img');
    img.setAttribute('id', 'dogImage');
    img.setAttribute('src', 'https://api.thedogapi.com/api/images/get?format=src&type=gif&size=large?');
    document.getElementById('fbImage').appendChild(img);
}

function dogDeGen() {
    location.reload(false);
}