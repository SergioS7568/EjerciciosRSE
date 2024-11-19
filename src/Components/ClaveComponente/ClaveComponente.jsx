import { useState } from "react";
import MensajesGuardados from "../MensajeBienvenida/MensajesGuardados"


const ClaveComponente = () => {

    const [msj, setMsj] = useState("");
    const mensajeRequerido=("(From changed state)!");

    const onClickMeButton = () =>{
        console.log("clicked")
        
        setMsj(mensajeRequerido)
       
       
    }

  return (
    <section>
        <MensajesGuardados 
        textosBienvenidas={"Hello my friend! "+ msj}
        ></MensajesGuardados>
       
           
           
            <button onClick={onClickMeButton}>Click me!</button>
        
    </section>
  )
}
export default ClaveComponente