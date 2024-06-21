// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { TodoProvider } from './contexts/TodoContext';
import './App.scss';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <TodoProvider>
            <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <TodoInput />
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default App;
