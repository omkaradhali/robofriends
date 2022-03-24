import React, { Component } from 'react';
import CardLists from './CardLists';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users}))
  }


  onSearchChange = (event) => {
    console.log(event.target.value)
    this.setState({searchfield:event.target.value})
  }

  render(){
    const filterrobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange} />
        <Scroll>
          <CardLists robots={filterrobot}/>
        </Scroll>
      </div>
    );
  }
}

export default App;