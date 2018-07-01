import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Hello from './components/Hello';
//import LifeCycle from './components/LifeCycle';
import Todolist from './components/Todolist';

import registerServiceWorker from './registerServiceWorker';

//sử dụng redux
import { Provider } from 'react-redux';   
import  store     from './redux/store';
 

ReactDOM.render(
    
      /*
        <Hello />
         <div style={{clear: 'both'}}></div>
         <LifeCycle /> 
      */
      < Provider  store = {store}>
            <Todolist /> 
      </ Provider>
    , document.getElementById('root')
);
registerServiceWorker();
