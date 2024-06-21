// src/contexts/TodoContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    todos: [
        { id: 1, text: 'Jog around the park 3x', completed: false },
        { id: 2, text: '10 minutes meditation', completed: false },
        { id: 3, text: 'Read for 1 hour', completed: false },
        { id: 4, text: 'Pick up groceries', completed: false },
        { id: 5, text: 'Complete Todo App on Frontend Mentor', completed: false },
    ],
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'CLEAR_COMPLETED':
            return { ...state, todos: state.todos.filter(todo => !todo.completed) };
        default:
            return state;
    }
};

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{ todos: state.todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
