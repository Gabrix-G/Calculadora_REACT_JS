import React, { useState } from 'react';

function ListaTareas() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, { 
        id: Date.now(), 
        texto: tarea,
        completada: false 
      }]);
      setTarea('');
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  return (
    <div className="lista-tareas-container">
      <h2>Lista de Tareas</h2>
      <div className="agregar-tarea">
        <input 
          type="text" 
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Ingrese una nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
      <ul className="lista-tareas">
        {tareas.map((tarea) => (
          <li 
            key={tarea.id} 
            className={`tarea-item ${tarea.completada ? 'completada' : ''}`}
          >
            <span onClick={() => toggleCompletada(tarea.id)}>
              {tarea.texto}
            </span>
            <button 
              onClick={() => eliminarTarea(tarea.id)} 
              className="eliminar-tarea"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
      {tareas.length > 0 && (
        <div className="contador-tareas">
          Tareas totales: {tareas.length}
        </div>
      )}
    </div>
  );
}

export default ListaTareas;