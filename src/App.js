import React, { Component, createRef } from 'react';
import './App.css';
import GiphySearch from './components/GiphySearch';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
//import request from 'superagent';
import { Segment, Sticky } from 'semantic-ui-react'

class App extends Component {
  contextRef = createRef()
  constructor() {
    super();

    this.myRef = React.createRef();

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      gf: new GiphyFetch('BUt5t6LaXD4aw4Yl2Re0el45WbODWEZA'),
      gridResults: <Grid width={1000} columns={4} fetchGifs={(offset) => this.state.gf.trending({ offset, limit: 10 })} />,
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

  async handleSearchChange(userQuery) {
    console.log(userQuery);
    const fetchGifs2 = (offset) => this.state.gf.search(userQuery, { offset, limit: 10 });

    //const url = `http://api.giphy.com/v1/gifs/search?q=${userQuery}&api_key=BUt5t6LaXD4aw4Yl2Re0el45WbODWEZA`;
    // request.get(url, function(err, res) {
    //     console.log(res.body.data[0]);
    // });
    
    //This is a bit fugly, but the Giphy Grid is really not meant to be updated once rendered, so gotta clear it, then add a new one.
    await this.setState({
      gridResults: null,
    })

    await this.setState({
      gridResults: <Grid width={1000} columns={4} fetchGifs={fetchGifs2} />,
    })
  }

  render() {
    return (
      <div className="App" ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Segment attached='top'>
            <header className="App-header">
              <h1>Devin's Giphy Search Page</h1>
              <GiphySearch onSearchChange={this.handleSearchChange} />
              <a className="App-link" href="https://github.com/dyoungman/giphy" target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
            </header>
          </Segment>
        </Sticky>
        <Segment attached='bottom' textAlign='center'>
          <footer className="App-footer">
            <h1>Search Results</h1>
            {this.state.gridResults}
          </footer>
        </Segment>
      </div>
    )
  }
}

export default App;