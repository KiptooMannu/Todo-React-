// src/components/Header/Header.jsx
import React from 'react';
import './Header.scss';


const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <header className="header">
            <h1>TODO</h1>
            <button onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? <img src="/assets/icon-sun.svg" alt="Light Mode" /> : <img src="/assets/icon-moon.svg" alt="Dark Mode" />}
            </button>
        </header>
    );
};

export default Header;
