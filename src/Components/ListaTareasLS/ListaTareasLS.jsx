import { useRef, useState } from "react";
import ListadoTareasLS from "./ListadoTareasLS";
import "./ListaTareasLS.css";
import { validarTarea } from "../../utilidades/Validadores/ValidadorListaTareas";

const savedListaTareasLS = JSON.parse(localStorage.getItem("tareas")) || [""];

const ListaTareasLS = () => {
  //const $inputBox = useRef();
  const $validarTarea = useRef();

  //by using onekey, when releasing the key pressing up, the event "e" will be activated
  //the activation key is enter
  //it only activates if the input is focused / if the use has click the input and didn't click anything else
  //it will activate the  function -"pressingEnterButton"  on press

  const [inputTareas, setInputTareas] = useState("");

  const [localStorageListaTareas, setLocalStorageListaTareas] =
    useState(savedListaTareasLS);

  const pressingEnterButton = () => {
    //console.log("1");
    const entradaTareasInput = $validarTarea.current.value;

    setInputTareas(entradaTareasInput);

    $validarTarea.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pressed!");

    if (!validarTarea($validarTarea.current)) {
      //console.log("No es valido");
      return;
    }

    console.log("se hizo un submit");

    const nuevaTarea = $validarTarea.current.value;

    console.log("La nueva Tarea agregada se llama: " + nuevaTarea);

    const nuevaListaDeTareas = [...localStorageListaTareas, nuevaTarea];

    setLocalStorageListaTareas(nuevaListaDeTareas);

    localStorage.setItem("tareas", JSON.stringify(nuevaListaDeTareas));

    alert("Saved!");

    e.target.reset();

    $validarTarea.current.classList.remove("is-valid");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="oversizedChicken">
        <h1 className="BigChicken">Bienvenido</h1>
        <h6>(Guarda los datos en LocalStorage)</h6>
        <h2 className="BigChicken">Ingresa tus tareas</h2>

        <fieldset className="chicken">
          <input
            className="ClassInput"
            onKeyUp={(e) => {
              if (e.key === "Enter") pressingEnterButton();
            }}
            placeholder="Tarea 1..."
            type="text"
            /* ref={$inputBox} */
            ref={$validarTarea}
          ></input>
        </fieldset>

        <ListadoTareasLS
          localStorageListaTareas={localStorageListaTareas}
          setLocalStorageListaTareas={setLocalStorageListaTareas}
        ></ListadoTareasLS>

        {JSON.stringify(localStorageListaTareas)}
      </fieldset>
    </form>
  );
};
export default ListaTareasLS;
