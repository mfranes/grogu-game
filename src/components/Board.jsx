import Grogu from './Grogu';

function Board({groguPosition}) {
    const boardSize = 6;

    const cells = (boardSize, groguPosition) => {
        const cellElements = []; // Array para almacenar los JSX elementos

        for (let i = 0; i < boardSize; i++) {
            // Generate unique key based on cell index (consider using a more robust method for large grids)
            const cellKey = `cell-${i}`;

            cellElements.push(
                <div key={cellKey} className="cell">
                    {/* Conditionally render Grogu only if the cell position matches */}
                    {i === groguPosition && <Grogu />}
                </div>
            );
        }

        return cellElements; // Return the array of JSX elements
    };

    return (
        <section className="board">
            {cells(boardSize, groguPosition)}
        </section>
    );

}

export default Board;
