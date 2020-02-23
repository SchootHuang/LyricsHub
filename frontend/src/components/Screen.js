import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../static/css/Screen.css';

class Screen extends Component {
    render() {
        const songs = this.props.songs.map(song => <li>{song}</li>)
        return (
            <div className="screen">
                <div>
                    <ul>
                        {songs}
                    </ul>
                </div>
                <div className="link"><Link to="third">See Generated Lyrics</Link></div>
            </div>

        );
    }
}

export default Screen;