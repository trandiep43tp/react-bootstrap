import React, { Component } from 'react';
import Search               from './Search';
import Sort                 from './Sort';
import IsShowForm           from './IsShowForm';

class Control extends Component {  
    
    render(){       
        return (
            <div className="row">
                    <Search  />               
                    <Sort   />           
                    <IsShowForm  />                                  
            </div>
        );
    }
}

export default Control;