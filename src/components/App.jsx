import {useState} from 'react';
import Header from './Header';
import Board from './Board';
import Form from './Form';

import '../styles/App.scss';
import Goods from './Goods.jsx';
import Dice from './Dice.jsx';

function App() {
  const [name, setName] = useState("");
  const [diceResult, setDiceResult] = useState(0);
  const [gameStatus, setGameStatus] = useState("En curso");
  const [groguPosition, setGroguPosition] = useState (0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);


  const updateGame = () => {
    // Si el resultado del dado es 4
    if (diceResult === 4) {
      console.log('handleDice -> Grogu avanza una casilla');

      // Cambia el estado del juego
      setGameStatus('Grogu avanza una casilla');
      // Calcula nueva posicion del grogu: Le suma 1 movimiento a la posicion actual del grogu
      const newGroguPosition = groguPosition + 1

      // Establece nueva posicion del grogu
      setGroguPosition(newGroguPosition);
    }


    // Si el resultado del dado es 3, quita 1 galleta
    if (diceResult === 3) {
      console.log('handleDice -> Se ha descargado 1 galleta');

      // Cambia el estado del juego, agregando el nombre de la usuaria
      setGameStatus(`${name} has ayudado a Mando a recoger una galleta`);

      // Calcula nueva cantidad de galletas
      const newCookiesAmount = cookies.slice(0, -1);

      // Guarda la nueva cantidad de galletas
      setCookies(newCookiesAmount);
    }


    // Si el resultado del dado es 2, quita 1 huevo
    if (diceResult === 2) {
      console.log('handleDice -> Se ha descargado 1 huevo');

      // Cambia el estado del juego, agregando el nombre de la usuaria
      setGameStatus(`${name} has ayudado a Mando a recoger un huevo`);

      // Calcula nueva cantidad de huevos
      const newEggsAmount = eggs.slice(0, -1);

      // Guarda la nueva cantidad de huevos
      setEggs(newEggsAmount);
    }


    // Si el resultado del dado es 1, quita 1 rana
    if (diceResult === 1) {
      console.log('handleDice -> Se ha descargado 1 rana');

      // Cambia el estado del juego, agregando el nombre de la usuaria
      setGameStatus(`${name} has ayudado a Mando a recoger una rana`);

      // Calcula nueva cantidad de ranas
      const newFrogsAmount = frogs.slice(0, -1);

      // Guarda la nueva cantidad de ranas
      setFrogs(newFrogsAmount);
    }
  };


  return (
    <>
      <Header />
      <Form setName={setName} />
      <Board groguPosition={groguPosition}/>

      <main className="page">
        <section>
          <Dice setDiceResult={setDiceResult} updateGame={updateGame} />
          <div className="game-status">{gameStatus}</div> {/* El estado del juego de acuerdo al lanzamiento del dado */}
        </section>

        <Goods goods={cookies}/>
        <Goods goods={eggs}/>
        <Goods goods={frogs}/>

        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
