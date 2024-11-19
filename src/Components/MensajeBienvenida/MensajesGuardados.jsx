import PropTypes from 'prop-types';

const MensajesGuardados = (props) => {

const {textosBienvenidas} = props;
  return (
    <>
    <h1>{textosBienvenidas}</h1>
    </>
  )
}
MensajesGuardados.propTypes = {
    textosBienvenidas: PropTypes.string.isRequired,
}

export default MensajesGuardados