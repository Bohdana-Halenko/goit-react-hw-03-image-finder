import React from 'react';
// import propTypes from 'prop-types';
import s from 'index.css';




const Searchbar = () => {
    return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm}>
                <button type="submit" className={s.SearchFormButton}>
                <span className="button-label">Search</span>
                </button>

                <input
                className={s.SearchFormInput}
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