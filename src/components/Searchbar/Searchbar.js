import React, { Component } from 'react';
import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export default class SearchBar extends Component {

    state = {
        searchQuery: '', 
        page: 1,
    }

    handleNameChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchQuery.trim() === '') {
        toast.info('Enter the request');
        return;
        }

        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '', page: 1});
    };
    
    render() {
        return (
            <header className='Searchbar'>
                <form
                    className='SearchForm'
                    onSubmit={this.handleSubmit}
                >
                    <button type="submit" className='SearchForm-button'>
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className='SearchForm-input'
                        type="text"
                        value={this.state.searchQuery}
                        onChange={this.handleNameChange}
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
                
            </header>
        );
    }
};
