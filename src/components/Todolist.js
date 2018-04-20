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
            isShowForm: false,
            search:''
        }
        this.handleToggle=this.handleToggle.bind(this);
        this.showAddTask=this.showAddTask.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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

    handleSearch(val){               
        this.setState({
            search: val
        });       
    }
    
    render(){
        //console.log(this.state.search);
        let itemOrigin = this.state.item;  //tạo một biến item để hứng dữ liệu từ this.state
        let items = [];
        let search = this.state.search.toLowerCase();
        console.log(search);

        if(search.length >0){
            itemOrigin.forEach(
                ( item ) => {
                    if(item.name.toLowerCase().indexOf(search) !== -1){
                        items.push(item);
                    }                   
                }
            );
        }else{
            items = itemOrigin;
        }
        
          
        
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
                        onClickSearch={this.handleSearch}
                    />
                {/* /Control*/}

                {/*FORM*/}
                    { elementForm }
                {/*/FORM*/}

                {/*LIST START*/}
                    <List item={items} />    {/* truyền dữ liệu sang component list*/}
                {/* /LIST START*/}

            </div>             
        );
    }
}

export default Todolist;



  