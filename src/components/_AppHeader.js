import React from 'react';
import GiphySearch from './components/GiphySearch';
import { Header, Segment } from 'semantic-ui-react'


const AppHeader = (item) => {
  return (
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
  )
};

export default AppHeader;