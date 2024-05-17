import {useState} from 'react';
import Header from './Header';
import Board from './Board';

import '../styles/App.scss';

function App() {
  const [name, setName] = useState("");
  const [dice, setDice] = useState("");
  const [gameStatus, setGameStatus] = useState("En curso");
  const [groguPosition, setGroguPosition] = useState (0);
  const [cookies,setCookies]= useState(["🍪","🍪","🍪"]);
  const [eggs, setEggs] = useState(["🥚","🥚","🥚"]);
  const [frogs, setFrogs] = useState(["🐸","🐸","🐸"]);
  const [cells,setCells]=useState (["cell"]);
  
  
  
  const board=()=>{
    const[cells,setCells] = useState(new Array(7).fill(null));
    

    

  }

  
  const rollDice = (sides) => {
    // console.log('rollDice');
    const minThrow = 1;
    return Math.floor(Math.random() * (sides - minThrow + 1) ) + minThrow;
    // return 4;
  };

  const handleDice = (ev) => {
    console.log('handleDice');
    const diceResult = rollDice(4);

    if (diceResult === 4) {
      setGameStatus('Grogu ha avanzado una casilla');
      setGroguPosition(groguPosition + 1);
    }

    console.log(diceResult);
    // console.log(groguPosition);
  };


  return (
    <>
      <Header />
      <Board groguPosition={groguPosition}/>

      <main className="page">
        <section>
          <button className="dice" onClick={handleDice}>Lanzar Dado</button>
          <div className="game-status">{gameStatus}</div>
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
