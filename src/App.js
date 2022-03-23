import React from 'react';
import { robots } from './robots';
import CardLists from './CardLists';
import SearchBox from './SearchBox';
const App = () => {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardLists robots={robots}/>
    </div>
  )
}

export default App;