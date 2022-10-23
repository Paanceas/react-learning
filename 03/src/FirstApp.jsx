
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {
  
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </>
  )
}


FirstApp.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subtitle: 'No hay sub-título que mostrar'
}