// src/components/Header/Header.jsx
import React from 'react';
import './Header.scss';
import sun from '../../images/icon-sun.svg'
import moon from '../../images/icon-moon.svg'

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="header">
      <h1>TODO</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? (
          <img src={sun} alt="Light Mode" />
        ) : (
          <img src={moon} alt="Dark Mode" />
        )}
      </button>
    </header>
  );
};

export default Header;
