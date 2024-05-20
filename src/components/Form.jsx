

function Form({names}) {
      

const handleChange=(ev)=>{
   names(ev.target.value)
   SetNames(value)

}

  return (
    <div>
      <form className="form">
        <label htmlFor=""className="color">Introduce tu nombre para jugar</label>

        <input type="text" id="names" name="names"onChange={handleChange} />
      
      </form>
      
    </div>
  )
}

export default Form
