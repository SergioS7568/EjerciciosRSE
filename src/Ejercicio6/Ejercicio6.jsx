import { useEffect, useState } from "react";
import CartaColor from "../Components/CartaColor/CartaColor";
import CartaColorDisplay from "../Components/CartaColor/Display/CartaColorDisplay";

const coloresLS = JSON.parse(localStorage.getItem("colores")) || [];

const Ejercicio6 = () => {
  const [todosColores, setTodosColores] = useState(coloresLS);

  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(todosColores));
  }, [todosColores]);

  return (
    <>
      <div
        style={{
          margin: "4rem 4rem 4rem 4rem",
        }}
      >
        <CartaColor
          todosColores={todosColores}
          setTodosColores={setTodosColores}
        ></CartaColor>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",

          margin: "0rem 0rem 0rem 0rem",
        }}
      >
        <CartaColorDisplay
          todosColores={todosColores}
          setTodosColores={setTodosColores}
        ></CartaColorDisplay>
      </div>
    </>
  );
};
export default Ejercicio6;
