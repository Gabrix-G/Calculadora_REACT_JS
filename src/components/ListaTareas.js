import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([
        ...tareas, 
        { 
          id: Date.now(), 
          texto: nuevaTarea, 
          completada: false 
        }
      ]);
      setNuevaTarea('');
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
    <div>
      <div>
        <input 
          type="text" 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Ingrese una nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
      
      <ul className="task-list">
        {tareas.map(tarea => (
          <li key={tarea.id}>
            <span className={tarea.completada ? 'task-completed' : ''}>
              {tarea.texto}
            </span>
            <div>
              <button onClick={() => toggleCompletada(tarea.id)}>
                {tarea.completada ? 'Deshacer' : 'Completar'}
              </button>
              <button onClick={() => eliminarTarea(tarea.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;