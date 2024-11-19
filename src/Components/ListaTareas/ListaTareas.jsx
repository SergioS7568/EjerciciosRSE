import { useRef, useState } from "react"

const ListaTareas = () => {

    const [tareas, setTareas] = useState(["Tarea 1", "Tarea 2"])
    const $inputBox = useRef();

    const onClickDelete = () =>{

        
    }

  return (
    <fieldset>
        
            <h1>
                Bienvnido
            </h1>

            <label>Ingresa Tareas</label>
        
        <fieldset>
            
            <input
             placeholder="Tarea 1..."
             type="text"
            ref={$inputBox}
             ></input>

        </fieldset>



        <ul>
            {tareas.map(( tareas, index) => {
            return  (<fieldset key={index}> <li>{tareas}</li> <button>X</button></fieldset>);
            })}
        </ul>
    </fieldset>
  )
}
export default ListaTareas