import React, { Component } from 'react';
import { robots } from './robots';
import CardLists from './CardLists';
import SearchBox from './SearchBox';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    this.setState({searchfield:event.target.value})
  }

  render(){
    const filterrobot = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange} />
        <CardLists robots={filterrobot}/>
      </div>
    );
  }
}

export default App;