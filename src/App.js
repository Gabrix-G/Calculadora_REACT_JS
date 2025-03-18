// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, ingrese números válidos');
      return;
    }
    
    setResultado(num1 + num2);
  };

  return (
    <div className="calculadora-container">
      <h1>Calculadora</h1>
      <div className="input-group">
        <label>Número 1:</label>
        <input 
          type="number" 
          value={numero1} 
          onChange={(e) => setNumero1(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label>Número 2:</label>
        <input 
          type="number" 
          value={numero2} 
          onChange={(e) => setNumero2(e.target.value)} 
        />
      </div>
      <button onClick={calcular}>Calcular</button>
      
      {resultado !== null && (
        <div className="resultado">
          <h2>Resultado: {resultado}</h2>
        </div>
      )}
    </div>
  );
}

export default App;