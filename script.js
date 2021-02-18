const calcDisplay = document.getElementById("display");
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnFour = document.getElementById("four");
const btnFive = document.getElementById("five");
const btnSix = document.getElementById("six");
const btnSeven = document.getElementById("seven");
const btnEight = document.getElementById("eight");
const btnNine = document.getElementById("nine");
const btnPlus = document.getElementById("plus");

let actualValue = [];
let previousOperation = 0;

function reciveFromButtons(value) {
  if (value == "plus") {
    previousOperation += Number(actualValue.join(""));
    console.log(previousOperation);
    value = "";
    actualValue = [];
  }
  actualValue.push(value);
  calcDisplay.value = actualValue.join("");
}

//Oprimiendo Numeros:
btnOne.addEventListener("click", () => reciveFromButtons(1));
btnTwo.addEventListener("click", () => reciveFromButtons(2));
btnThree.addEventListener("click", () => reciveFromButtons(3));
btnFour.addEventListener("click", () => reciveFromButtons(4));
btnFive.addEventListener("click", () => reciveFromButtons(5));
btnSix.addEventListener("click", () => reciveFromButtons(6));
btnSeven.addEventListener("click", () => reciveFromButtons(7));
btnEight.addEventListener("click", () => reciveFromButtons(8));
btnNine.addEventListener("click", () => reciveFromButtons(9));

//Oprimiendo Operaciones:
btnPlus.addEventListener("click", () => reciveFromButtons("plus"));
