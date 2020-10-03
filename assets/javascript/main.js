let numOfDice = document.querySelector("#numofdice");
let numOfSides = document.querySelector("#numofsides");
let rollButton = document.querySelector("#roll");
let totalDiceRoll = document.querySelector("#total");
let showAllRollsButton = document.querySelector("#showallrolls");
let allRolls = document.querySelector("#allrolls");
let resetButton = document.querySelector("#reset");

let dieRolls = [];

let result = [];

rollButton.addEventListener("click", function () {
  let numOfDiceValue = +numOfDice.value;
  let numOfSidesValue = +numOfSides.value;
  //   console.log(numOfDiceValue);
  let count = 0,
    total = 0;

  while (count < numOfDiceValue) {
    result[count] = Math.floor(Math.random() * numOfSidesValue + 1);
    dieRolls.push(result[count]);
    total += dieRolls[count];
    count++;
  }
  console.log(dieRolls);
  totalDiceRoll.innerHTML = total;
});

// console.log(dieRolls);

showAllRollsButton.addEventListener("click", function () {
  i = 0;
  while (i < dieRolls.length) {
    let list = document.createElement("li");
    let li = document.createTextNode(dieRolls[i]);
    list.appendChild(li);
    allRolls.appendChild(list);
    i++;
  }
});
