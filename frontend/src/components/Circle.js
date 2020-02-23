import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import taylor from '../static/images/taylor.png'
import selena from '../static/images/selena.png'
import fka from '../static/images/fka-twigs.png'
import carly from '../static/images/carly.png'
import blackpink from '../static/images/blackpink.png'
import '../static/css/Circle.css';


class Circle extends Component {
    state = {
        images: [taylor, selena, carly, fka, blackpink]
    }

    onCircleClick1 = () => {
        this.props.onClick();
    }

    onCircleClick2 = (event) => {
        let index = event.target.value - 1;
        let temp = this.state.images;
        [temp[0], temp[index]] = [temp[index], temp[0]];
        this.setState({ images: temp });
    }

    onCircleClick3 = (event) => {
        let index = event.target.value - 1;
        let temp = this.state.images;
        [temp[0], temp[index]] = [temp[index], temp[0]];
        this.setState({ images: temp });
    }
    onCircleClick4 = (event) => {
        let index = event.target.value - 1;
        let temp = this.state.images;
        [temp[0], temp[index]] = [temp[index], temp[0]];
        this.setState({ images: temp });
    }
    onCircleClick5 = (event) => {
        let index = event.target.value - 1;
        let temp = this.state.images;
        [temp[0], temp[index]] = [temp[index], temp[0]];
        this.setState({ images: temp });
    }

    render() {
        return (
            <div className="circles">
                <button className="circle1" onClick={this.onCircleClick1} style={{ backgroundImage: `url(${this.state.images[0]})` }}></button>
                <button className="circle2" onClick={this.onCircleClick2} value="2" style={{ backgroundImage: `url(${this.state.images[1]})` }}></button>
                <button className="circle3" onClick={this.onCircleClick3} value="3" style={{ backgroundImage: `url(${this.state.images[2]})` }}></button>
                <button className="circle4" onClick={this.onCircleClick4} value="4" style={{ backgroundImage: `url(${this.state.images[3]})` }}></button>
                <button className="circle5" onClick={this.onCircleClick5} value="5" style={{ backgroundImage: `url(${this.state.images[4]})` }}></button>
                <button className="circle6">More</button>
            </div>
        );
    }
}

export default Circle;