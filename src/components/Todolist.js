import React, { Component} from 'react';
import Title from './Title';
import Control from './Control';
import Form from './Form';
import List from './List';

//import dữ liệu
import item from '../data/Task';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            item: item,   //lấy dữ liệu từ file js bên ngoài
            isShowForm: false
        }
        this.handleToggle=this.handleToggle.bind(this);
        this.showAddTask=this.showAddTask.bind(this);
    }
    handleToggle(){
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }

    showAddTask(){
        this.setState({
            isShowForm: false
        });
    }
    
    render(){
       // console.log(this.state.item);
        let item=this.state.item;   //tạo một biến item để hứng dữ liệu từ this.state
        let elementForm=null;
        if(this.state.isShowForm){
            elementForm= <Form onClick={this.showAddTask}/>
        }
        return(                                 
            <div className="row">               
                {/*Tiêu đề*/}
                     <Title />
                {/* /Tiêu đề*/}

                {/*Control*/}
                    <Control 
                        onClickAdd={this.handleToggle} 
                        isShowForm={this.state.isShowForm}
                    />
                {/* /Control*/}

                {/*FORM*/}
                    { elementForm }
                {/*/FORM*/}

                {/*LIST START*/}
                    <List item={item} />    {/* truyền dữ liệu sang component list*/}
                {/* /LIST START*/}

            </div>             
        );
    }
}

export default Todolist;



  