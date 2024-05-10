import{useState} from "react";
import Header from "./Header";
import Board from "./Board";
import Grogu from "./Grogu";
import Dado from "./Dado";

import "../styles/App.scss"

function App() {
  const [name,setName]= useState("")
  
  return (
    <>
    <Header/>
    <Board/>
    <Grogu/>
    
    <main className="page">
   
   
  
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>

      <section>
        <button className="dice">Lanzar Dado</button>
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