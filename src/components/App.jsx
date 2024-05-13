import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";

import "../styles/App.scss";

function App() {
  const [name, setName] = useState("");
  const [dice, setDice] = useState("");

  const rollDice = (sides) => {
    // console.log('rollDice');
    const minThrow = 1;
    const maxThrow = sides;

    return Math.floor(Math.random() * (maxThrow - minThrow + 1) ) + minThrow;
  };

  const handleDice = (ev) => {
    console.log('handleDice');
    const diceResult = rollDice(4);

    console.log(diceResult);
  };


  return (
    <>
      <Header />
      <Board />

      <main className="page">
        <section>
          <button className="dice" onClick={handleDice}>Lanzar Dado</button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
