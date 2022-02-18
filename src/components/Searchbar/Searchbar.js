import React from 'react';
// import propTypes from 'prop-types';




const Searchbar = () => {
    return (
        <header className='Searchbar'>
            <form className='SearchForm'>
                <button type="submit" className='SearchForm-button'>
                <span className="button-label">Search</span>
                </button>

                <input
                className='SearchForm-input'
                type="text"
                // autocomplete="off"
                // autofocus
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