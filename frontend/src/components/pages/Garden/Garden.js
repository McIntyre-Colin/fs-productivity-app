import React from 'react';
import { useEffect , useState } from 'react';
import './Garden.css';

function Garden(props) {
    console.log('The count is: ', props.count)

    
    return (
    
        <div className="Garden">
            <h1>Garden</h1>
            <div className='counter'> 
            <button onClick={props.children}>
            hello {props.count} 
            </button>
            </div>
         </div>
        
  );
}

export default Garden;