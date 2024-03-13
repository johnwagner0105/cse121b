/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  return (document.querySelector("#sum").value = add(addNumber1, addNumber2));
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  let subsNumber1 = Number(document.querySelector("#subtract1").value);
  let subsNumber2 = Number(document.querySelector("#subtract2").value);
  return (document.querySelector("#difference").value = subtract(
    subsNumber1,
    subsNumber2
  ));
};
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  return (document.querySelector("#product").value = multiply(
    factor1,
    factor2
  ));
};
document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);
  return (document.querySelector("#quotient").value = divide(
    dividend,
    divisor
  ));
};
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);
/* Decision Structure */
const getTotalDue = () => {
  let amount = Number(document.getElementById("subtotal").value);
  if (document.getElementById("member").checked) {
    document.getElementById("total").innerHTML = amount - amount * 0.2;
  } else {
    document.getElementById("total").innerHTML = amount;
  }
};
document.getElementById("getTotal").addEventListener("click", getTotalDue);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(
  (number) => number % 2 === 0
);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(
  (number) => number % 2 === 1
);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce(
  (sum, number) => sum + number
);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(
  (number) => number * 2
);
/* Output Sum of Multiplied by 2 Array */
newArray = numbersArray.map((number) => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = newArray.reduce(
  (sum, number) => sum + number
);
