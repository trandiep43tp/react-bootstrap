import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { sort }             from './../redux/actions/action';

class Sort extends Component {
    constructor(props){
        super(props);       
       
        this.handleSort   = this.handleSort.bind(this);
    }



    handleSort(sort){
        this.props.selectSort(sort);        
    }
    
    render(){
        let { by, value} = this.props.sort; 
        let string = by + "-" + value ;
        
        return (   
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a onClick={()=>this.handleSort({by: 'name', value: 'asc'})} role="button">Name ASC</a></li>
                        <li><a onClick={()=>this.handleSort({by: 'name', value: 'desc'})} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={()=>this.handleSort({by: 'level', value: 'asc'})} role="button">Level ASC</a></li>
                        <li><a onClick={()=>this.handleSort({by: 'level', value: 'desc'})} role="button">Level DESC</a></li>
                    </ul>

                    <span className="label label-success label-lg">{ string }</span>
                </div>
            </div>
            
        )
    }
}


const mapStatetoProps = state =>{    
    return {
       sort : state.sort
    }
}

const mapDispatchtoProps = ( dispatch, ownProps) =>{    
    return {
       selectSort: (val) =>{
           dispatch(sort(val))
       }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Sort);
