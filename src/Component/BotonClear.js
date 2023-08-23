import React from 'react';
import '../styles/BotonClear.css';

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);
/*OnClick es el evento el children es lo que pasa entre las etiquetas

pasa la funcion en OnClick es decir vacearla y regresa lo de la funcion
const eliminarInput = val => {
    setInput('');  -----> esto es lo que regresa
  }
*/

export default BotonClear;