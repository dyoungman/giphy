import React, { Component } from 'react';
import './App.css';
import GiphySearch from './components/GiphySearch';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import request from 'superagent';
import SearchResults from './components/SearchResults';

class App extends Component {
  constructor() {
    super();

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      gf: new GiphyFetch('BUt5t6LaXD4aw4Yl2Re0el45WbODWEZA'),
      fetchGifs: (offset) => this.state.gf.trending({ offset, limit: 10 }),
      results: []
      // results: [
      //     {
      //         id: 1,
      //         url: 'http://fakeimg.pl/300/'
      //     },
      //     {
      //         id: 2,
      //         url: 'http://fakeimg.pl/300/'
      //     },
      //     {
      //         id: 3,
      //         url: 'http://fakeimg.pl/300/'
      //     }
      // ]
    }
}

  handleSearchChange(userQuery) {
    console.log(userQuery);
    const url = `http://api.giphy.com/v1/gifs/search?q=${userQuery}&api_key=BUt5t6LaXD4aw4Yl2Re0el45WbODWEZA`;

    request.get(url, function(err, res) {
        //console.log(res.body.data[0]);
    });
    const gf2 = new GiphyFetch('BUt5t6LaXD4aw4Yl2Re0el45WbODWEZA');
    this.setState({
      fetchGifs: (offset) => gf2.search(userQuery, { offset, limit: 10 }),
    })
    console.log(this.state.fetchGifs);
    //this.App.Grid.fetchGifs = this.state.fetchGifs;
    //this.Grid.fetchGifs = this.state.fetchGifs;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Devin's Giphy Search Page</h1>
          <div>
            <GiphySearch onSearchChange={this.handleSearchChange} />
            <SearchResults results={this.state.results} />
            <Grid width={1000} columns={4} fetchGifs={this.state.fetchGifs} />
          </div>
        </header>
        <footer className="App-header">
          <a
            className="App-link"
            href="https://github.com/dyoungman/giphy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </footer>
      </div>
    )
  }
}

export default App;