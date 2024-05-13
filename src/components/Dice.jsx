function Dice() {
  return <button className="dice">Lanzar Dado</button>;
}

function getRandomNumber(max) {
  max = 4;
  return Math.cell(Math.random() * max);
}

export default Dice;
