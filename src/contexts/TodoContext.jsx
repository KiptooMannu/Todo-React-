// src/contexts/TodoContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

// Define initial state
const initialState = {
    todos: [], // Ensure this is an array
};

// Reducer function to manage state updates
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed),
            };
        default:
            return state;
    }
};

// Create context
const TodoContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ todos: state.todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

// Custom hook to use the TodoContext
export const useTodos = () => useContext(TodoContext);
