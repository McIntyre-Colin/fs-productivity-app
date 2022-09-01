import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import { useEffect , useState } from 'react';

import Garden from '../Garden/Garden.js'
import './Home.css';
import Panel from '../../assets/Panel/Panel.js'
import '../../assets/Panel/Panel.css'

// const panelData = [
//  {
//   'title': 'Project 1',
//   'id' : 0,
//  },
//  {
//   'title': 'Project 2',
//   'id': 1,
//  },
//  {
//   'title': 'Project 3',
//   'id': 2,
//  },
// ]

function Home(props) {


 const [panel, setPanel] = useState([])
 const [user, setUser] = useState(0)
 const [count, setCount] = useState(0)


 console.log('Yeehaw imported the data',props.data)

 const data = props.data;
 let projects = data[1]
  console.log('filtered projet data: ', projects)

 function checkUserId() {
  console.log()
 };

 function filterProjects() {
  let projects = data.projects
  console.log(projects)
 }


  
  return (
    
    <div className="Home">
        <div className='Home-Content'>
          <div className='Home-Content-wrapper'>
          <Link to='/garden'>
            <Panel title="Garden"/>
          </Link>
          {props.count}
          
          </div>
          <div className='Home-Content-wrapper'>
          <Link to='/hive'>
            <Panel title="Hive"/>
          </Link>
          </div>
         </div>
         <div className='Home-Content'>
            {
              panel.map((project) => (
                <Link to={project.id}>
                <Panel title = {project.title}/>
                </Link>
              ))}
         </div>
   
    </div>
  );
}

export default Home;