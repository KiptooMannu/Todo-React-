// src/contexts/TodoContext.js
import React, { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();

const initialTodos = [
  { id: 1, text: 'Jog around the park 3x', completed: false },
  { id: 2, text: '10 minutes meditation', completed: false },
  { id: 3, text: 'Read for 1 hour', completed: false },
  { id: 4, text: 'Pick up groceries', completed: false },
  { id: 5, text: 'Complete Todo App on Frontend Mentor', completed: false },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
