// src/components/Filters/Filters.jsx
import React from 'react';
import './Filters.scss';

const Filters = ({ setFilter, filter, clearCompleted }) => {
    return (
        <div className="filters">
            <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>
                All
            </button>
            <button className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>
                Active
            </button>
            <button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>
                Completed
            </button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    );
};

export default Filters;
