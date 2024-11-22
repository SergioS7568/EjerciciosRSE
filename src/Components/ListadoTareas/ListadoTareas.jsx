import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ListadoTareas.css";

const ListadoTareas = (props) => {
  const { entradaTareasInput } = props;

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    console.log("  Palabra " + entradaTareasInput);
    if (entradaTareasInput) {
      console.log("  In ");

      setTareas((prevTareas) => [...prevTareas, entradaTareasInput]);
    }
    console.log(" out ");
  }, [entradaTareasInput]);

  const onClickDelete = (indexNumber) => {
    console.log("DELETE" + indexNumber);

    //deletes everything
    // setTareas(tareas.filter(tareas => tareas === tareas[indexNumber]))

    //this was i can delete in position of the index element, along the element, rather than the whole array or nothing.
    //it works!
    setTareas(tareas.filter((_, index) => index !== indexNumber));
  };

  return (
    <section>
      <ul>
        {tareas.map((tareas, index) => {
          return (
            <fieldset key={index} className="BlockesDeTareas">
              <li>{tareas}</li>
              <button
                onClick={() => onClickDelete(index)}
                className="buttonDelete"
              >
                X
              </button>
            </fieldset>
          );
        })}
      </ul>
    </section>
  );
};

ListadoTareas.propTypes = {
  entradaTareasInput: PropTypes.string.isRequired,
};

export default ListadoTareas;
