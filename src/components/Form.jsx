// Acepta como parametro la funcion setName del useState
function Form({setName}) {

    // Ejecuta una funcion cada vez que el usuario modifica el input
    const handleChange = (event) => {
        event.preventDefault();

        // console.log(event.currentTarget.id);
        // console.log(event.currentTarget.value);

        // Obtiene el valor que ha ingresado la usuaria en el input
        const playerName = event.currentTarget.value;
        // Guarda lo ingresado por la usuaria en el useState
        setName(playerName);
    }

    return (
        <div>
            <form className="form">
                <label htmlFor="playerName" className="color">Introduce tu nombre para jugar</label>
                <input type="text" id="playerName" onChange={handleChange}/>
            </form>
        </div>
    )
}

export default Form
