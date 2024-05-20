import {useState} from 'react';
import Header from './Header';
import Board from './Board';
import Form from './Form';
import GetGameStatus from './GetGameStatus';

import '../styles/App.scss';

function App() {
  const [name, setName] = useState("");
  const [dice, setDice] = useState("");
  const [gameStatus, setGameStatus] = useState("En curso");
  const [groguPosition, setGroguPosition] = useState (0);
  const [cookies,setCookies]= useState(["🍪","🍪","🍪"]);
  const [eggs, setEggs] = useState(["🥚","🥚","🥚"]);
  const [frogs, setFrogs] = useState(["🐸","🐸","🐸"]);
  const [names,SetNames]= useState({})

  
  const rollDice = (sides) => {
    const minThrow = 1; // El valor mínimo del dado
    const diceResult = Math.floor(Math.random() * (sides - minThrow + 1) ) + minThrow; // Fórmula provista por Chat GPT
    console.log('rollDice -> diceResult: ' + diceResult);
    return diceResult;
  };

  const handleDice = (ev) => {
    console.log('handleDice > previous groguPosition: ' + groguPosition);
    const diceResult = rollDice(4); // Obtiene el resultado del lanzamiento de un dado de 4 caras

    // Si el resultado del dado es 4
    if (diceResult === 4) {
      setGameStatus('Grogu ha avanzado una casilla'); // Cambia el estado del juego a que el grogu ha avanzado
      setGroguPosition(groguPosition + 1); // Le suma un movimiento a la posicion actual del grogu
    }
  };


  return (
    <>
      
      <Header />
      <Form  names={names}/>
      <Board groguPosition={groguPosition}/>
     
      

      <main className="page">
        <section>
          <button className="dice" onClick={handleDice}>Lanzar Dado</button>
          <div className="game-status">{gameStatus}</div> {/* El estado del juego de acuerdo al lanzamiento del dado */}
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
