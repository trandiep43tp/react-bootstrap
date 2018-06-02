import React, { Component } from 'react';

class Sort extends Component {
    constructor(props){
        super(props);       
       
        this.handleSort   = this.handleSort.bind(this);
    }



    handleSort(orderBy, orderDir){
        this.props.onClickSort(orderBy, orderDir);        
    }
    
    render(){
        let { orderBy, orderDir} = this.props; 
        
        return (   
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a onClick={()=>this.handleSort('name', 'asc')} role="button">Name ASC</a></li>
                        <li><a onClick={()=>this.handleSort('name', 'desc')} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={()=>this.handleSort('level', 'asc')} role="button">Level ASC</a></li>
                        <li><a onClick={()=>this.handleSort('level', 'desc')} role="button">Level DESC</a></li>
                    </ul>

                    <span className="label label-success label-medium">{ orderBy + "-" + orderDir }</span>
                </div>
            </div>
            /*

            <div className="col-xs-3 col-sm-3 col-md-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a onClick={ () => this.handleSort('name','asc')} role="button">Name ASC</a></li>
                        <li><a onClick={ () => this.handleSort('name','desc')} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={ () => this.handleSort('level','asc')} role="button">Level ASC</a></li>
                        <li><a onClick={ () => this.handleSort('level','desc')} role="button">Level DESC</a></li>
                    </ul>
                    <label className="label label-success label-medium ">{orderBy + "-" + orderDir}</label>
                    
                </div>
                
            </div>      
            
            */
        )
    }
}

export default Sort;