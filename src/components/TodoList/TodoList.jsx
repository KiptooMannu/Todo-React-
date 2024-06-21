// // src/components/TodoList/TodoList.jsx
// import React, { useState } from 'react';
// import { useTodos } from '../../contexts/TodoContext';
// import TodoItem from '../TodoItem/TodoItem';
// import Filters from '../Filters/Filters';
// import './TodoList.scss';

// const TodoList = () => {
//     const { todos, dispatch } = useTodos();
//     const [filter, setFilter] = useState('All');

//     const filteredTodos = todos.filter(todo => {
//         if (filter === 'Active') return !todo.completed;
//         if (filter === 'Completed') return todo.completed;
//         return true;
//     });

//     const clearCompleted = () => {
//         dispatch({ type: 'CLEAR_COMPLETED' });
//     };

//     return (
//         <div className="todo-list-container">
//             <ul className="todo-list">
//                 {filteredTodos.map(todo => (
//                     <TodoItem key={todo.id} todo={todo} />
//                 ))}
//             </ul>
//             <Filters setFilter={setFilter} filter={filter} clearCompleted={clearCompleted} />
//         </div>
//     );
// };

// export default TodoList;
