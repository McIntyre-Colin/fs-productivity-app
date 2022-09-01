import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home/Home.js';
import Garden from './components/pages/Garden/Garden.js';
import Hive from './components/pages/Hive/Hive.js';

import Navbar from './components/Navbar/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import testData from './testData.js'

function App() {
  const [count, setCount] = useState(0);
  function getData() {
    fetch('/api/just/testing/')
      .then(response => response.json())
      .then(data => {
        console.log('Got Data form Django!');
        console.log(data);
      });
    }
    useEffect(getData, []);
 
  function counter() {
    setCount(count+1)
  }
  return (
    <div className="App">
      {console.log('Hello World')}
      {console.log('The test data is: ', testData)}
      <div className="Sidebar-Component">
        <Sidebar />
      </div>
      <div className="Navbar-Component">
        <Navbar />
      </div>
      <div className="Content-Component">
      <Routes>
        <Route path='/' element={<Home data={testData} count={count}/>} />
        <Route path='/garden' element={<Garden count={count} children={counter}/>} />\
        <Route path='/hive' element={<Hive />} />
      </Routes>
      </div>



    </div>
  );
}

export default App;
