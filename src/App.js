import './App.css';
import Logo from './images/Logo.jpg';
import Boton from './Component/boton';
import Pantalla from './Component/Pantalla';
import BotonClear from './Component/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val );//conquenacion
  }

  const eliminarInput = val => {
    setInput('');
  }

  const calcularResultado = () => {
    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={Logo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>{/*Esto es para que pase el valor
        de input a la pantalla*/}
      <div className='fila'>
        <Boton manejarClick={agregarInput}>1</Boton>
        {/*Pasa como un prop*/}
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
        <BotonClear manejarClear={eliminarInput}>CLEAR</BotonClear>
      </div>
      </div>
    
    </div>
  );
}

export default App;
