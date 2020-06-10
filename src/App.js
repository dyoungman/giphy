import React, { Component, createRef } from 'react';
import './App.css';
import GiphySearch from './components/GiphySearch';
import { Gif, Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
//import request from 'superagent';
import { Header, Segment, Sticky } from 'semantic-ui-react'

const gf = new GiphyFetch('BUt5t6LaXD4aw4Yl2Re0el45WbODWEZA');

class App extends Component {
  contextRef = createRef()
  constructor() {
    super();

    this.myRef = React.createRef();
    this.handleGifClick = this.handleGifClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      gridResults: <Grid width={1000} columns={3} fetchGifs={(offset) => gf.trending({ offset, limit: 10 })} onGifClick={(gif, e) => {this.handleGifClick(gif,e)}} />,
      modalGif: undefined
    }
  }

  handleGifClick(gif, e) {
    console.log("gif", gif);
    e.preventDefault();
    this.setState({modalGif: gif});
  }

  async handleSearchChange(userQuery) {
    console.log(userQuery);
    const fetchGifs2 = (offset) => gf.search(userQuery, { offset, limit: 10 });
    
    //Normally would just update the state for the grid, but the Giphy Grid won't update once rendered, so gotta clear it, then add a new one.
    await this.setState({
      gridResults: null,
    })

    await this.setState({
      gridResults: <Grid width={1000} columns={3} fetchGifs={fetchGifs2} onGifClick={(gif, e) => {this.handleGifClick(gif,e)}} />,
    })
  }

  render() {
    return (
      <div className='App' ref={this.contextRef}>
        <Sticky context={this.contextRef} >
          <Segment attached='top'>
            <div className='App-header'>
              <Segment.Group>
                <Segment floated='left' className='App-content'>
                  <Header as='h1' color='purple'>Devin's Giphy Search Page</Header>
                  <GiphySearch onSearchChange={this.handleSearchChange} />
                </Segment>
                <Segment textAlign='right' floated='right' className='App-content'>
                  <Header as='h4' color='purple'>Devin Youngman</Header>
                  <a className="App-link" href="mailto:devin.youngman@gmail.com" target="_blank" rel="noopener noreferrer">Email</a><br />
                  <a className="App-link" href="https://www.linkedin.com/in/dyoungman/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
                  <a className="App-link" href="https://github.com/dyoungman/giphy" target="_blank" rel="noopener noreferrer">Github Repo</a>
                </Segment>
              </Segment.Group>
            </div>
          </Segment>
        </Sticky>
        <Segment attached='bottom'>
          <div className='App-footer'>
            {this.state.gridResults}
            {this.state.modalGif && (
              <div className='App-modal'
                onClick={e => {
                  e.preventDefault();
                  this.setState({modalGif: undefined});
                }}
              >
                <Gif gif={this.state.modalGif} width={500} />
              </div>
            )}
          </div>
        </Segment>
      </div>
    )
  }
}

export default App;