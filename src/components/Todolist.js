import React, { Component} from 'react';
import Title               from './Title';
import Control             from './Control';
import Form                from './Form';
import List                from './List';
//import $ from 'jquery';

class Todolist extends Component{
      
    render(){                   
        return(                                 
            <div >                     
                <Title />            
                <Control />  
                <Form  />                               
                <List />                

            </div>             
        );
    }
}

export default Todolist;



  