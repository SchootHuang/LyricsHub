import React, { Component } from 'react';
import '../static/css/SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div id="navbar">
                <div className="ui search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search" />
                        <i className="search icon" />
                    </div>
                    <div className="results" />
                </div>
                <div className="nav-text">
                    About Us
                </div>
            </div>
        );
    }
}

export default SearchBar;