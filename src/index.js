import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import Routes from './Routes'


import {BroswerRouter} from 'react-router-dom';
import Routes from './Routes';

const App = () => {
  
    return(
      <BroswerRouter>
      <Routes/>

      </BroswerRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
