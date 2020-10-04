let numOfDice = document.querySelector("#numofdice");
let numOfSides = document.querySelector("#numofsides");
let rollButton = document.querySelector("#roll");
let totalDiceRoll = document.querySelector("#total");
let showAllRollsButton = document.querySelector("#showallrolls");
let allRolls = document.querySelector("#allrolls");
let numDice = document.querySelector("#numdice");
let resetButton = document.querySelector("#reset");

let dieRolls = [];

rollButton.addEventListener("click", function () {
  let numOfDiceValue = +numOfDice.value;
  let numOfSidesValue = +numOfSides.value;
  let count = 0,
    total = 0;
  let result = [];
  while (count < numOfDiceValue) {
    result[count] = Math.floor(Math.random() * numOfSidesValue + 1);
    dieRolls.push(result[count]);
    total += dieRolls[count];
    count++;
  }
  totalDiceRoll.innerHTML = total;
});

showAllRollsButton.addEventListener("click", function () {
  let i = 0;
  while (i < dieRolls.length) {
    let list = document.createElement("li");
    let li = document.createTextNode(dieRolls[i]);
    list.appendChild(li);
    allRolls.appendChild(list);
    i++;
  }
});

showAllRollsButton.addEventListener("click", function () {
  let j = 0;
  while (j < dieRolls.length) {
    let dice = document.createElement("div");
    dice.style.width = "50px";
    dice.style.height = "50px";
    dice.style.margin = "10px";
    dice.style.background = "red";
    dice.style.color = "white";
    dice.style.display = "flex";
    dice.style.justifyContent = "center";
    dice.style.alignItems = "center";
    dice.innerHTML = dieRolls[j];
    numDice.style.display = "flex";
    numDice.appendChild(dice);
    j++;
  }
});

resetButton.addEventListener("click", function () {
  numOfDice.value = "";
  numOfSides.value = "";
  dieRolls = [];
  totalDiceRoll.innerHTML = "";
  allRolls.innerHTML = "";
  numDice.innerHTML = "";
});
