// src/components/TodoInput/TodoInput.jsx
import React, { useState } from 'react';
import { useTodos } from '../../contexts/TodoContext';
import './TodoInput.scss';

const TodoInput = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  const addTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text, completed: false } });
      setText('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
