import React, { Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            taskId       : '',
            taskName     :   '',
            taskLevel    :   0
        }

       
        this.showAdd       = this.showAdd.bind(this);
        this.handleChange  = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);        
    }

    componentWillMount(){
        let item = this.props.itemEdit;        
        if( item.id !== ''){
           this.setState({
               taskName   : item.name,
               taskLevel  : item.level               
           })
        }
    }

    showAdd(){
        //alert(123);
        this.props.onClickCancel();
        
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
            id       : this.state.id,
            taskName : this.state.taskName,
            taskLevel: this.state.level
        }
        this.props.onClickSubmit(item);        
        
        event.preventDefault();
    }

    render(){
            console.log(this.props.itemEdit)
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
                        <button type="button" className="btn btn-default" onClick={this.showAdd}>Cancel</button>
                    </form>
                </div>
            </div>           
        ) 
    }
}

export default Form;



  