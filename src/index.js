import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Hello from './components/Hello';
//import LifeCycle from './components/LifeCycle';
import Todolist from './components/Todolist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="container">  
      {/*
        <Hello />
         <div style={{clear: 'both'}}></div>
         <LifeCycle /> 
      */}
      
      <Todolist /> 
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
