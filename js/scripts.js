// Buisness logic
const add = function (number1, number2) {
  return number1 + number2;
};

const sub = function (number1, number2) {
  return number1 - number2;
};

const multi = function (number1, number2) {
  return number1 * number2;
};

const div = function (number1, number2) {
  return number1 / number2;
};

// User Interface Logic
$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#sub").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const result = sub(number1, number2);
    $("#output").text(result);
  });
});

