import React, { Component } from 'react';
import { robots } from './robots';
import CardLists from './CardLists';
import SearchBox from './SearchBox';
import './App.css'

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
    const filterrobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange} />
        <CardLists robots={filterrobot}/>
      </div>
    );
  }
}

export default App;