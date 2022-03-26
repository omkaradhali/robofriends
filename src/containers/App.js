import React, { useState, useEffect } from 'react';
import CardLists from '../components/CardLists';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

function App() {

  const [robots, setRobots] = useState([])
  const[searchField, setSearchField] = useState('')

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  }, [])


  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filter_robot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ?
      <h1>Loading</h1>
      :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchfield={searchField} searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardLists robots={filter_robot}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
}


export default App;