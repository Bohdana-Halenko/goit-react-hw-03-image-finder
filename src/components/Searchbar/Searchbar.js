import React from 'react';
// import propTypes from 'prop-types';
// import s from './Filter.module.css';




const Searchbar = () => {
    return (
        <header class="searchbar">
            <form class="form">
                <button type="submit" class="button">
                <span class="button-label">Search</span>
                </button>

                <input
                class="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

// Searchbar.propTypes = {
//   filter: propTypes.string,
//   onChange: propTypes.func,
// };

export default Searchbar;