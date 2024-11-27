import PropTypes from "prop-types";

const CartaColorDisplay = (props) => {
  const { todosColores, setTodosColores } = props;

  const handleBorrarColor = (borrarColor) => {
    const nuevaListaColorDespuesDeBorrado = todosColores.filter(
      (color) => color.codigo !== borrarColor
    );
    setTodosColores(nuevaListaColorDespuesDeBorrado);
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {todosColores.map((colorObj, index) => (
          <fieldset
            key={index}
            style={{
              margin: "12px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <h4 style={{ marginLeft: "0.5rem" }}>{colorObj.colores}</h4>
            <div
              style={{
                backgroundColor: "RGB(227, 242, 253)",
                width: "200px ",
                height: "130px",
                alignContent: "center",
                justifySelf: "stretch",
                margin: "1rem 0rem 1rem 0rem",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: colorObj.colores,
                  justifySelf: "center",
                }}
              ></div>
            </div>
            <div
              style={{
                justifySelf: "end",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <button
                onClick={() => {
                  handleBorrarColor(colorObj.codigo);
                }}
                style={{
                  borderRadius: "0.3rem",
                  backgroundColor: "red",
                }}
              >
                Borrar
              </button>
            </div>
          </fieldset>
        ))}
      </section>
    </>
  );
};

CartaColorDisplay.propTypes = {
  setTodosColores: PropTypes.func.isRequired,
  todosColores: PropTypes.array.isRequired,
};
export default CartaColorDisplay;
