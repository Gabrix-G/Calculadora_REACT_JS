import React, { useState } from 'react';

function Calculator() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, ingrese números válidos');
      return;
    }

    let result;
    switch (operacion) {
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

  const handleLimpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
    setOperacion('suma');
  };

  return (
    <div className="calculadora-container">
      <select 
        value={operacion} 
        onChange={(e) => setOperacion(e.target.value)}
        className="operacion-select"
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

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

      <div className="button-group">
        <button onClick={handleLimpiar} className="limpiar-btn">
          Limpiar
        </button>
        <button onClick={handleCalcular} className="calcular-btn">
          Calcular
        </button>
      </div>

      {resultado !== null && (
        <div className="resultado">
          Resultado: {resultado}
        </div>
      )}
    </div>
  );
}

export default Calculator;