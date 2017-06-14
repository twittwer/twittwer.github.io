'use strict';

function calcAge(birthday, dateToCalculate) {
  dateToCalculate = (dateToCalculate || (dateToCalculate instanceof Date)) ? dateToCalculate : new Date();
  if (!birthday || !(birthday instanceof Date)) {
    throw new Error('Invalid birthday parameter! - Necessary and needs to be a Date.');
  }
  var age = dateToCalculate.getFullYear() - birthday.getFullYear();
  birthday.setFullYear(dateToCalculate.getFullYear());
  if (dateToCalculate.getTime() < birthday.getTime()) {
    age = age - 1;
  }
  return age;
}

$(document)
  .ready(function () {

    $('.button-collapse')
      .sideNav();

    $('.dropdown-button')
      .dropdown({
        constrainWidth: false,
        hover: false,
        belowOrigin: true
      });

    document.getElementById('birthday-age').innerText = '(' + calcAge(new Date(1995, 8, 16)) + ' Jahre)';

  });
