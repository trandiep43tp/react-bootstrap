import React, { Component } from 'react';

class Sort extends Component {
   
    
    render(){
        return (            
            <div className="col-xs-3 col-sm-3 col-md-3">
                <div className="dropdown">
                    <button className="btn btn-primary" dropdown-toggle="true" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort by<span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a role="button">Name ASC</a></li>
                        <li><a role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a role="button">Level ASC</a></li>
                        <li><a role="button">Level DESC</a></li>
                    </ul>
                    <span className="label label-success label-large">Name DESC</span>
                </div>
            </div>               
        )
    }
}

export default Sort;