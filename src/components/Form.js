import React, { Component} from 'react';
import { close_form, submitForm } from './../redux/actions/action';
import { connect }         from 'react-redux';


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            taskId       : '',
            taskName     :   '',
            taskLevel    :   0
        }   
        
        this.handleChange  = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);        
    }

    componentWillMount(){
           
        let item = this.props.itemEdit;        
        
           this.setState({
               taskId     : item.id,
               taskName   : item.name,
               taskLevel  : item.level               
           })
        
        
    }

    componentWillReceiveProps(nextProps){
        
        let item = nextProps.itemEdit;        
        if( item !== null){
           this.setState({
               taskId     : item.id,
               taskName   : item.name,
               taskLevel  : item.level               
           })
        }
        
    }   

    handleChange(event) {
        const target = event.target;
       // const value = target.type === 'checkbox' ? target.checked : target.value;
       const value = target.value;
        const name = target.name;
        
        this.setState({
             [name]: value
        });       
        
    }
    
    handleSubmit(event) {        
        //tạo một đối tượng
        let item = {
            id       : this.state.taskId,
            taskName : this.state.taskName,
            taskLevel: this.state.taskLevel
        }
        this.props.formSubmit(item);      
        event.preventDefault();
    }

    

    render(){
       let { isShowForm } = this.props;
       if( isShowForm === false ) return null;

        return(                             
            <div className="row" id = 'form' >                
                <div className="col-md-offset-7 col-md-5">
                    <form action="true" className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true" >Label</label>
                            <input name="taskName" value={ this.state.taskName} onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name"  />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">Label</label>
                            <select name="taskLevel" value={ this.state.taskLevel } onChange={this.handleChange} className="form-control" required="required" >
                                <option  value={0}>Small</option>
                                <option  value={1}>Medium</option>
                                <option  value={2}>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-default" onClick={this.props.formCancel}>Cancel</button>
                    </form>
                </div>
            </div>           
        ) 
    }
}

const mapStatetoProps = state =>{    
    return {
       isShowForm : state.isShowForm,
       itemEdit: state.itemEdit
    }
}

const mapDispatchtoProps = ( dispatch, ownProps) =>{    
    return {
       formCancel: () =>{          
          dispatch(close_form())
        },
        formSubmit: (item) =>{             //khi submit phải tực hiện 2 hành động
            dispatch(submitForm(item));
            dispatch(close_form())
            
        }

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Form);




  