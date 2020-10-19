// Buisness logic
function add(number1, number2) {
  return number1 + number2;
}

function sub(number1, number2) {
  return number1 - number2;
}

function multi(number1, number2) {
  return number1 * number2;
}

function div(number1, number2) {
  return number1 / number2;
}

// User Interface Logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("enter a second number:"));
const result = div(number1, number2);
alert(result);
