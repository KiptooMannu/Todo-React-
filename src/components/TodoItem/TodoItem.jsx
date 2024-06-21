// src/components/TodoItem/TodoItem.jsx
import React from 'react';
import { useTodos } from '../../contexts/TodoContext';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
    const { dispatch } = useTodos();

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } });
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } })}
            />
            <span>{todo.text}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
