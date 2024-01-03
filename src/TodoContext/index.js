import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children}) {

  const defaultTodos = [
    { text: 'Cortar cebolla', completed: true},
    { text: 'Tomar el curso de Intro a React.js', completed: false},
    { text: 'Llorar con la llorona', completed: false},
    { text: 'Investigar Notion', completed: true},
    { text: 'Cumple de Mabel', completed: false}
  ]

  const {
    item: todos,
    saveItem : saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  // console.log('Los usuarios buscan TODOs de ' + searchValue);
  
  const completedTodos = todos.filter(todo => 
    !!todo.completed
    ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false
    })
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };