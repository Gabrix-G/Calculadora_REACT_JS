import React, { useState } from 'react';

function Calculator() {
  const [operation, setOperation] = useState('Suma');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    switch(operation) {
      case 'Suma':
        setResult(n1 + n2);
        break;
      case 'Resta':
        setResult(n1 - n2);
        break;
      case 'Multiplicación':
        setResult(n1 * n2);
        break;
      case 'División':
        setResult(n1 / n2);
        break;
      default:
        setResult(null);
    }
  };

  const clearFields = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div>
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option>Suma</option>
        <option>Resta</option>
        <option>Multiplicación</option>
        <option>División</option>
      </select>
      
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      
      <div>
        <button onClick={calculate}>Calcular</button>
        <button onClick={clearFields}>Limpiar</button>
      </div>
      
      {result !== null && (
        <div>Resultado: {result}</div>
      )}
    </div>
  );
}

export default Calculator;