import { useState, useRef } from "react";
import PropTypes from "prop-types";

import "./CartaColor.css";

import { Colours } from "./form/Colours";

const CartaColor = (props) => {
  const { todosColores, setTodosColores } = props;
  const [colorSeleccionado, setColorSeleccionado] = useState("black");

  const $colorSelected = useRef();
  //console.log("todos los colores son: " + todosColores);
  //console.log("todos los colores son: " + JSON.stringify([todosColores]));

  const handleOnClickGuardar = (e) => {
    e.preventDefault();
    const colorWhenPressed = $colorSelected.current.value;
    if (colorWhenPressed.trim()) {
      setColorSeleccionado($colorSelected.current.value);
      console.log("the color is  " + $colorSelected.current.value);
      $colorSelected.current.value = "";

      const nuevoColor = new Colours(colorWhenPressed);

      const nuevaListaColores = [...todosColores, nuevoColor];
      setTodosColores(nuevaListaColores);

      localStorage.setItem("colores", JSON.stringify([nuevoColor]));
      console.log("todos los colores son: " + JSON.stringify([todosColores]));

      alert("Color Guardado");
    }
  };

  const handleColorChange = () => {
    if ($colorSelected.current) {
      setColorSeleccionado($colorSelected.current.value);
    }
  };

  return (
    <form>
      <fieldset>
        <h4 className="mt-1 mb-1 ml-4">Administrar Colores</h4>
        <section
          style={{
            display: "flex",
            height: "100px",
            width: "100%",
            alignContent: "center",
            backgroundColor: "RGB(227, 242, 253)",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{ backgroundColor: colorSeleccionado }}
            className="box-color-dynamic"
          ></div>
          <input
            className="input-Box-Color"
            placeholder="Ingrese un color ej: Blue"
            ref={$colorSelected}
            id="color-Input"
            type="text"
            onKeyUp={(e) => {
              if (e.onKeyUp === "Enter") {
                handleOnClickGuardar();
              }
            }}
            onChange={handleColorChange}
          ></input>
        </section>
        <div
          style={{
            justifySelf: "end",
            marginRight: "1rem",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <button onClick={handleOnClickGuardar} type="submit">
            Guardar
          </button>
        </div>
      </fieldset>
    </form>
  );
};

CartaColor.propTypes = {
  setTodosColores: PropTypes.func.isRequired,
  todosColores: PropTypes.array.isRequired,
};
export default CartaColor;
