import { useRef, useState } from "react"
import ListadoTareas from "../ListadoTareas/ListadoTareas";
import "./ListaTareas.css"

const ListaTareas = () => {

    
    const $inputBox = useRef();



    //by using onekey, when releasing the key pressing up, the event "e" will be activated
    //the activation key is enter
    //it only activates if the input is focused / if the use has click the input and didn't click anything else
    //it will activate the  function -"pressingEnterButton"  on press

    const [inputTareas, setInputTareas] = useState("")
  

    const pressingEnterButton = () =>{

      console.log("1");
      const entradaTareasInput = $inputBox.current.value

      setInputTareas(entradaTareasInput);

      
     $inputBox.current.value = "";
      
    }

 
  return (
    <fieldset className="oversizedChicken">
        
            <h1 className="BigChicken">
                Bienvenido
            </h1>
           
            <h2 className="BigChicken">Ingresa tus tareas</h2>
         
        <fieldset className="chicken">
            
            <input
            className="ClassInput"
            onKeyUp={(e)=> {
                if ( e.key === "Enter")
                  pressingEnterButton();
            }}
             placeholder="Tarea 1..."
             type="text"
            ref={$inputBox}
            
             ></input>

        </fieldset>

        <ListadoTareas entradaTareasInput= {inputTareas}></ListadoTareas>


    </fieldset>
  )
}



export default ListaTareas