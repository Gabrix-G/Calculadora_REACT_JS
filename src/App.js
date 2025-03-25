import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import TaskList from './components/ListaTareas';
import StudentRegistry from './components/RegistroEstudiantes';

function App() {
  const [currentPage, setCurrentPage] = useState('calculator');
  const renderPage = () => {
    switch(currentPage) {
      case 'calculator':
        return <Calculator />;
      case 'tasks':
        return <TaskList />;
      case 'students':
        return <StudentRegistry />;
      default:
        return <Calculator />;
    }
  };

  return (
    <div className="App">
      <nav>
        <button 
          onClick={() => setCurrentPage('calculator')}
          className={currentPage === 'calculator' ? 'active' : ''}
        >
          Calculadora
        </button>
        <button 
          onClick={() => setCurrentPage('tasks')}
          className={currentPage === 'tasks' ? 'active' : ''}
        >
          Lista de Tareas
        </button>
        <button 
          onClick={() => setCurrentPage('students')}
          className={currentPage === 'students' ? 'active' : ''}
        >
          Registro de Estudiantes
        </button>
      </nav>

      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;