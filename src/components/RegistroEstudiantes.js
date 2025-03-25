import React, { useState } from 'react';

function RegistroEstudiantes() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [studentLastName, setStudentLastName] = useState('');
  const [studentCode, setStudentCode] = useState('');

  const addStudent = () => {
    if (studentName && studentLastName && studentCode) {
      const newStudent = {
        id: Date.now(),
        name: studentName,
        lastName: studentLastName,
        code: studentCode
      };
      setStudents([...students, newStudent]);
      // Clear input fields
      setStudentName('');
      setStudentLastName('');
      setStudentCode('');
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Nombre"
        />
        <input 
          type="text" 
          value={studentLastName}
          onChange={(e) => setStudentLastName(e.target.value)}
          placeholder="Apellido"
        />
        <input 
          type="text" 
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
          placeholder="Código"
        />
        <button onClick={addStudent}>Agregar Estudiante</button>
      </div>
      
      <table className="student-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Código</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              <td>{student.code}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistroEstudiantes;