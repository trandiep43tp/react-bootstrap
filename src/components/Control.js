import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props){
       super(props);

       this.handleAdd = this.handleAdd.bind(this);
       this.handleSearch = this.handleSearch.bind(this);
    }

    handleAdd(){
        this.props.onClickAdd();  //gọi hàm truyền từ component cha
        
    }
    
    handleSearch(val){
        //console.log(val);
        this.props.onClickSearch(val);
    }

    render(){
        let elementAddTask = <button type="button" className="btn btn-info btn-block" onClick={this.handleAdd}>Add Task</button>;
        
        if(this.props.isShowForm ===true){
            elementAddTask = <button type="button" className="btn btn-success btn-block" onClick={this.handleAdd}>Close Form</button>;
        }

        return (
            <div className="row">
                    <Search onClickSearch={this.handleSearch} />
                {/*SORT*/}
                    <Sort />
                {/* /SORT*/}
                {/*ADD*/}
                <div className="col-xs-5 col-sm-5 col-md-5" >
                     {elementAddTask}
                </div>
                {/* /ADD*/}                    
            </div>
        )
    }
}

export default Control;