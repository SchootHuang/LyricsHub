import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../static/css/App.css'
import Circle from './Circle';
import Screen from './Screen';
import SearchBar from './SearchBar'
import ShowLyrics from './ShowLyrics';
import SearchList from './SearchList';

const API = 'https://localhost:3001/search';
const DEFAULT = 'Taylor Swift'
class App extends Component {

  state = {
    songs: []
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  display = () => {
    this.setState({ songs: ['You Need to Calm Down', 'Shake it Off', 'You Belong With Me', 'Look What You Make Me Do', 'We Are Never Ever Getting Back Together', 'Blank Space', 'Bad Blood', 'All You Had to Do Was Stay', 'Long Live'] })
  }

  render() {
    return (
      <BrowserRouter>
        <SearchBar />
        <Route exact path="/">
          <SearchList />
        </Route>

        <Route path="/second">
          <div>

            <div id="showcase">
              <div className="circle">
                <Circle onClick={this.display} />
              </div>
              <div className="screen">
                <Screen songs={this.state.songs} />
              </div>

            </div>
          </div>
        </Route>

        <Route path="/third">
          <ShowLyrics />
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
