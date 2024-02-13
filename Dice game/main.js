
function rollDice(){
  const numsOfDice = document.getElementById("number-of-dice").value;
  const diceResult = document.getElementById("result");
  const diceImage = document.getElementById("dice-images");
  const totalValue = document.getElementById("total");
  const values = [];
  const images = [];
  let total = 0;

  for(let i = 0; i < numsOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<image src="Dice_Image/${value}.png" alt="Dice ${value}" style="height: 50px;">`);
  }

  total = values.reduce((prev, next) => {
    return prev + next;
  });

  totalValue.textContent = `Total Value ${total}`;
  diceResult.textContent = `Dice Numbers ${values.join(`-`)}`;
  diceImage.innerHTML = images.join(``);

  

}