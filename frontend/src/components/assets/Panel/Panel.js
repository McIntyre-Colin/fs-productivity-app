import React from 'react';
import {Link} from 'react-router-dom';

import './Panel.css';


function Panel(props) {

  
  return (
    <div className="Panel">
       
        <div className='Panel-title'>
            {props.title}
        </div>   
    </div>
  );

}

export default Panel;