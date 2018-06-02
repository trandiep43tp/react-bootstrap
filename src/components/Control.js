import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
      
       
    render(){
        let { orderBy, orderDir} = this.props;     //cách khai biến ngắn gọn

        let elementAddTask = <button 
                                id       ="bb"
                                type      = "button" 
                                className = "btn btn-info btn-block" 
                                onClick   = {this.props.onClickAdd}
                             >
                             Add Task
                             </button>;
        
        if(this.props.isShowForm ===true){
            elementAddTask = <button 
                                 id       ="aa"
                                type      = "button" 
                                className = "btn btn-success btn-block" 
                                onClick   = {this.props.onClickAdd}
                             >
                             Close Form
                             </button>;
        }

        return (
            <div className="row">
                    <Search 
                        onClickSearch  = {this.props.onClickSearch} 
                        onclickClear   = {this.props.onclickClear}
                    />
                {/*SORT*/}
                    <Sort 
                        orderBy     = { orderBy }
                        orderDir    = { orderDir }
                        onClickSort = {this.props.onClickSort}
                    />
                {/* /SORT*/}
                {/*ADD*/}
                <div className="col-xs-5 col-sm-5 col-md-5" >
                     {elementAddTask}
                </div>
                {/* /ADD*/}                    
            </div>
        );
    }
}

export default Control;