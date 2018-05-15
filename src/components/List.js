import React, { Component} from 'react';
import Item from './Item';

class List extends Component{
    
    render(){
        //console.log(this.props.item);   //lấy props từ todolist truyền vào
        let    item        =this.props.item;
        const element_item =item.map((element,index) =>{
            return (
                < Item 
                    key   = {index } 
                    item  = {element} 
                    onClickDelete = { this.props.onClickDelete} 
                    onClickEdit   = { this.props.onClickEdit }
                >
                </Item>  // truyền dữ liêu sang component Item
            )            
        });

        return(                         
            <div className="panel panel-success">
                <div className="panel-heading" >List Task</div>
                <table className="table table-hover">
                    <thead >
                        <tr>
                            <th style={{width: '30%'}} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{width: '20%'}} className="text-center">Level</th>
                            <th style={{width: '20%'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {element_item}
                    </tbody>
                </table>
            </div>                            
        );
    }
}

export default List;



  