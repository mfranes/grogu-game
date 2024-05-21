

function Form({names}) {
      

const handleChange=({names})=>{
   names(ev.target.value)
console.log(names)
   SetNames({...names,[id]:value})

}

  return (
    <div>
      <form className="form">
        <label htmlFor=""className="color">Introduce tu nombre para jugar</label>

        <input type="text" id="names" name="names"onChange={handleChange}value={names.value}/>
      
      </form>
      
    </div>
  )
}

export default Form
