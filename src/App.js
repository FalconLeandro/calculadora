import './App.css';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import LogoFCC from './componentes/LogoFCC';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }
    
  };

  const agregarInput = val => {
    console.log(val); 
    if (!(isNaN(val) && isNaN(input.slice(-1)))) {
      setInput(input + val);
    }
  };

  return (
    <div className="App">
      <LogoFCC />
      <div className='contenedor-calculadora'>
        <Pantalla 
          input={input}/>

        <div className='fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('0')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
