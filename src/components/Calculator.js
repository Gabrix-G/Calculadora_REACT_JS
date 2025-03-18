import React, { useState } from 'react';
import './Calculator.css'; // Asumiendo que tienes un archivo CSS

function Calculator() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [operacion, setOperacion] = useState('suma'); // Por defecto suma

  const handleCalcular = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, ingrese números válidos');
      return;
    }
    
    let result;
    switch(operacion) {
      case 'suma':
        result = num1 + num2;
        break;
      case 'resta':
        result = num1 - num2;
        break;
      case 'multiplicacion':
        result = num1 * num2;
        break;
      case 'division':
        if (num2 === 0) {
          alert('No se puede dividir por cero');
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = num1 + num2;
    }
    
    setResultado(result);
  };

  return (
    <div className="calculadora-container">
      <h1>Calculadora</h1>
      
      <div className="input-group">
        <label>Numero 1:</label>
        <input 
          type="number" 
          value={numero1} 
          onChange={(e) => setNumero1(e.target.value)}
        />
      </div>
      
      <div className="input-group">
        <label>Numero 2:</label>
        <input 
          type="number" 
          value={numero2} 
          onChange={(e) => setNumero2(e.target.value)}
        />
      </div>
      
      <div className="input-group">
        <label>Operación:</label>
        <select 
          value={operacion} 
          onChange={(e) => setOperacion(e.target.value)}
        >
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>
      </div>
      
      <button onClick={handleCalcular}>Calcular</button>
      
      {resultado !== null && (
        <div className="resultado">
          <h2>Resultado: {resultado}</h2>
        </div>
      )}
    </div>
  );
}

export default Calculator;