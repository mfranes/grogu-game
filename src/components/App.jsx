import{useState} from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";



import "../styles/App.scss"

function App() {
  const [name,setName]= useState("")
  const [dice,setDice]= useState("")
  const rollDice=()=>{

  }
  
  
   const handleDice=(ev)=>{
    setDice(getRandomNumber ());
    console.log(dice);
  }
    
}
  return (
    
    <>
    <Header/>
    <Board/>
  
    <main className="page">
   
   
  

    <section>
        
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


export default App;