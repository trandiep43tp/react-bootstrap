import React, { Component} from 'react';
import Title from './Title';
import Control from './Control';
import Form from './Form';
import List from './List';
import _ from 'lodash';    //import như thế nầy là import toàn bộ
//import { filter, includes} from 'lodash'; đây là import chỉ cái mình sử dụng
//import $ from 'jquery';

//import dữ liệu
import item from '../data/Task';
const uuidv4 = require('uuid/v4');

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            items       : item,   //lấy dữ liệu từ file js bên ngoài
            isShowForm  : false,
            search      :'',
            orderBy     : 'name',
            orderDir    : 'asc',
            itemEdit    : null      
        }
        this.handleToggle     = this.handleToggle.bind(this);
        this.showAddTask      = this.showAddTask.bind(this);
        this.handleSearch     = this.handleSearch.bind(this);
        this.handleClear      = this.handleClear.bind(this);
        this.handleSort       = this.handleSort.bind(this);
        this.handleDelete     = this.handleDelete.bind(this);
        this.handelEdit       = this.handelEdit.bind(this);
        this.handelSubmmit    = this.handelSubmmit.bind(this);
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

    handleClear(){
        this.setState({
            search: ''
        });
    }
    
    handleSort(orderBy, orderDir){
        this.setState({
            orderBy  : orderBy,
            orderDir : orderDir
        })
    }

    handleDelete(id){
        let items=this.state.items;
        _.remove(items, (item)=>{
           return item.id===id
        });
        this.setState({
                items: items
        })
    }

    handelEdit(item){
        this.setState({
            itemEdit  : item,
            isShowForm: true
        })     

    }

    handelSubmmit(item){
        console.log(item.id) 
        if(item.id ===''){
            console.log("rỗng")
        }       
       let { items} = this.state;
            
            items.push({
                id   : uuidv4(),
                name : item.taskName,
                level: item.taskLevel
            })
      
      
       this.setState({
           items: items
       })
    }

    render(){
        //console.log(this.state.items);
        let itemOrigin                    = this.state.items;        //tạo một biến item để hứng dữ liệu từ this.state
        let items                         = [];       
        let { orderBy, orderDir, search, itemEdit } = this.state;             // cách viết ngắn gọn 
        let elementForm                   = null;
        

      /*
            cách sử dụng lodash
            cài lodash: npm i --save lodash
            import lodash vào import _ from 'lodash'
      */
        if(search.length >0){
            items= _.filter(itemOrigin, (item)=>  {
                return _.includes(item.name.toLowerCase(), search.toLowerCase());
              });
        }else{
            items= itemOrigin;
        }
        
        
      /*
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
        
        */
        //sort
        items = _.orderBy(items,[orderBy],[orderDir]);   //sử dụng lodash
       
        if(this.state.isShowForm){
            elementForm= <Form  
                            itemEdit      = { itemEdit}
                            onClickCancel = { this.showAddTask}
                            onClickSubmit = { this.handelSubmmit}
                         />
        }

       


        return(                                 
            <div className="row">               
                {/*Tiêu đề*/}
                     <Title />
                {/* /Tiêu đề*/}

                {/*Control*/}
                    <Control 
                        onClickAdd    ={this.handleToggle} 
                        isShowForm    ={this.state.isShowForm}
                        onClickSearch ={this.handleSearch}
                        onclickClear  ={this.handleClear}
                        orderBy       ={ orderBy }
                        orderDir      ={ orderDir }
                        onClickSort   ={this.handleSort}
                    />
                {/* /Control*/}

                {/*FORM*/}
                    { elementForm }
                {/*/FORM*/}

                {/*LIST START*/}
                    <List 
                        item          = { items} 
                        onClickDelete = { this.handleDelete}
                        onClickEdit   = { this.handelEdit}
                    />    {/* truyền dữ liệu sang component list*/}
                {/* /LIST START*/}

            </div>             
        );
    }
}

export default Todolist;



  