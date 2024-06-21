// src/components/TodoItem/TodoItem.jsx
import React from 'react';
import { useTodos } from '../../contexts/TodoContext';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
    const { dispatch } = useTodos();

    const toggleTodo = () => {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    };

    const removeTodo = () => {
        dispatch({ type: 'REMOVE_TODO', payload: todo.id });
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div onClick={toggleTodo}>
                {todo.text}
            </div>
            <button onClick={removeTodo}>Delete</button>
        </li>
    );
};

export default TodoItem;
