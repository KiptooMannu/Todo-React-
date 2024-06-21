// src/components/TodoItem/TodoItem.jsx
import React from 'react';
import { useTodos } from '../../contexts/TodoContext';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
    const { dispatch } = useTodos();

    const toggleTodo = () => {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    };

    const deleteTodo = () => {
        dispatch({ type: 'DELETE_TODO', payload: todo.id });
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-item-text" onClick={toggleTodo}>
                <input type="checkbox" checked={todo.completed} readOnly />
                <span>{todo.text}</span>
            </div>
            <button className="delete-button" onClick={deleteTodo}>
                <img src="/assets/icon-cross.svg" alt="Delete" />
            </button>
        </li>
    );
};

export default TodoItem;
