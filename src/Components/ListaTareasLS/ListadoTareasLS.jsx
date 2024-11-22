import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ListadoTareasLS.css";

const ListadoTareasLS = (props) => {
  const { localStorageListaTareas, setLocalStorageListaTareas } = props;

  const [tareas, setTareas] = useState(localStorageListaTareas);

  console.log(
    "--localStorageListaTareas start " + localStorageListaTareas + "    --  "
  );

  useEffect(() => {
    if (tareas) {
      setTareas(localStorageListaTareas);
    }
  }, [tareas, localStorageListaTareas]);

  const onClickDelete = (indexNumber) => {
    console.log("DELETE  " + indexNumber);

    //deletes everything
    // setTareas(tareas.filter(tareas => tareas === tareas[indexNumber]))

    //this was i can delete in position of the index element, along the element, rather than the whole array or nothing.
    //it works!
    //setTareas(
    //   localStorageListaTareas.filter((_, index) => index !== indexNumber)
    //);
    const updatedTasks = localStorageListaTareas.filter(
      (_, index) => index !== indexNumber
    );

    setLocalStorageListaTareas(updatedTasks);

    //setLocalStorageListaTareas(updatedTasks);
    localStorage.setItem("tareas", JSON.stringify(localStorageListaTareas));

    //setTareas(updatedTasks)

    console.log(
      "--localStorageListaTareas  " + localStorageListaTareas + "    --  "
    );
    console.log("--updatedTasks  " + updatedTasks + "    --  ");
    console.log("--updatedTasks  " + JSON.stringify(updatedTasks) + "    --  ");
  };

  return (
    <section>
      <ul>
        {localStorageListaTareas.map((localStorageListaTareas, index) => {
          return (
            <fieldset key={index} className="BlockesDeTareas">
              <li>{localStorageListaTareas}</li>
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

ListadoTareasLS.propTypes = {
  localStorageListaTareas: PropTypes.array.isRequired,
  setLocalStorageListaTareas: PropTypes.func.isRequired,
};

export default ListadoTareasLS;
