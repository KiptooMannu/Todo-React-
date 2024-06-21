// src/contexts/TodoContext.jsx
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/uselocalStorage';

const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [storedTodos, setStoredTodos] = useLocalStorage('todos', []);
    const [state, dispatch] = useReducer(todoReducer, storedTodos);

    useEffect(() => {
        setStoredTodos(state);
    }, [state, setStoredTodos]);

    // Add default todos on first render
    useEffect(() => {
        if (state.length === 0) {
            dispatch({ type: 'ADD_TODO', payload: { id: 1, text: 'Jog around the park 3x', completed: false } });
            dispatch({ type: 'ADD_TODO', payload: { id: 2, text: '10 minutes meditation', completed: false } });
            dispatch({ type: 'ADD_TODO', payload: { id: 3, text: 'Read for 1 hour', completed: false } });
            dispatch({ type: 'ADD_TODO', payload: { id: 4, text: 'Pick up groceries', completed: false } });
            dispatch({ type: 'ADD_TODO', payload: { id: 5, text: 'Complete Todo App on Frontend Mentor', completed: false } });
        }
    }, [state.length]);

    return (
        <TodoContext.Provider value={{ todos: state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
