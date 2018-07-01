import React, { Component } from 'react';
import { connect }          from 'react-redux'; 
import { toggle_form, actUnSelectEdit }      from './../redux/actions/action';

class IsShowForm extends Component {      
    
    render(){
       
        let { isShowForm } = this.props;
        let elementAddTask = <button 
                                id       ="bb"
                                type      = "button" 
                                className = "btn btn-info btn-block" 
                                onClick   = {this.props.handle_toggleForm}
                             >
                             Add Task
                             </button>;
        
        if(isShowForm ===true){
            elementAddTask = <button 
                                 id       ="aa"
                                type      = "button" 
                                className = "btn btn-success btn-block" 
                                onClick   = {this.props.handle_toggleForm}
                             >
                             Close Form
                             </button>;
        }

        return (
            <div className="col-xs-5 col-sm-5 col-md-5" >
                  {elementAddTask}   
            </div>                                                        
        );
    }
}

const mapStatetoProps = state =>{    
    return {
       isShowForm : state.isShowForm
    }
}
      
const mapDispatchtoProps = ( dispatch, ownProps) =>{    
    return {
       handle_toggleForm: () =>{          
          dispatch(toggle_form());
          dispatch(actUnSelectEdit())
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps) (IsShowForm);

