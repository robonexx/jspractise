const showDiceRolls = document.querySelector('.showDiceRolls');
const sumOfDiceRolls = document.querySelector('.sumOfDiceRolls');
const btn = document.querySelector('.btn');
let dice1 = 0;
let dice2 = 0;

let sum = 0;
let rolls = 0;

let rollDice = {
  sides: 6,
  roll: function () {
    let randomNr = Math.floor(Math.random() * this.sides) + 1;
    return randomNr;
  },
};

btn.addEventListener('click', () => {
  dice1 = rollDice.roll();
  dice2 = rollDice.roll();

  rolls += 2;

  sum += (dice1 + dice2);

  console.log(`Results:
    Dice 1: ${dice1}
    Dice 2: ${dice2}
    Amount of thrown: ${rolls}
    Sum of dices: ${sum}`);

  return dice1, dice2, sum, rolls;
});
