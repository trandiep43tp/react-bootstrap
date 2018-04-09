import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props){
       super(props);

        this.state={
            showAdd: true
        }
        this.handleAdd=this.handleAdd.bind(this);
      
    }

    handleAdd(){
        this.props.onClickAdd();  //gọi hàm truyền từ component cha
        this.setState({
            showAdd: !this.state.showAdd
        })
    }
    
    render(){
        return (
            <div className="row">
                    <Search />
                {/*SORT*/}
                    <Sort />
                {/* /SORT*/}
                {/*ADD*/}
                <div className="col-xs-5 col-sm-5 col-md-5" style={{visibility: this.state.showAdd? 'show': 'hidden'}}>
                     <button type="button" className="btn btn-info btn-block" onClick={this.handleAdd}>Add Task</button>
                </div>
                {/* /ADD*/}                    
            </div>
        )
    }
}

export default Control;