import Grogu from './Grogu';

function Board({groguPosition}) {
    // Define el tamaño de las casillas donde el grogu puede avanzar
    const boardSize = 6;


    // Retorna un nuevo array, utilizando Array.map(), en base a un array con nulls creados con Array.fill(null)
    const cells = (boardSize, groguPosition) => {
        // Crea un array del tamaño de las casillas del juego, con valores: null
        const initialArrayWithNullValues = Array(boardSize).fill(null);

        // Crea un nuevo array, mapeando cada elemento null del array anterior, en una celda
        return initialArrayWithNullValues.map((_, i) => {
            // Crea una key unica en base al índice
            const cellKey = `cell-${i}`;

            // Agrega el componente grogu, solo si la posicion de grogu corresponde al número de celda.
            // En caso contrario, agrega null
            const groguComponent = i === groguPosition ? <Grogu/> : null; // Operador ternario

            return (
                <div key={cellKey} className="cell">
                    {groguComponent}
                </div>
            );
        });
    };


    return (
        <section className="board">
            {/* Pinta dinamicamente las celdas, dependiendo del tamaño del tablero y la posicion del grogu */}
            {cells(boardSize, groguPosition)}
        </section>
    );
}

export default Board;
