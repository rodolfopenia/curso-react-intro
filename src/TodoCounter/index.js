import React from 'react';
import "./TodoCounter.css";
import { TodoContext } from '../TodoContext';

function TodoCounter(){

  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)

  const goodMessage = completedTodos == totalTodos;
  if (!goodMessage) {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        ¡¡FELICIDADES!! HAS COMPLETADO TODAS TUS TAREAS
      </h1>
    );
  }
  
}

export { TodoCounter };