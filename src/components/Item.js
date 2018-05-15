import React, { Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props);

        this.handleDelete  = this.handleDelete.bind(this);
        this.handleEdit    = this.handleEdit.bind(this);
    }

    handleDelete(id){
        this.props.onClickDelete(id);
    }

    handleEdit(item){
        this.props.onClickEdit(item);
    }

    render(){
        let item=this.props.item;   //lấy dữ liệu từ component list        
        let elementLevel=<span className="label label-default">Small</span>;
        if(item.level===1){
                elementLevel=<span className="label label-success">Medium</span>;
        }else if(item.level===2){
                elementLevel=<span className="label label-danger">Hight</span>;
        }

        return(        
            <tr>
                <td className="text-center">{item.id }</td>
                <td>{ item.name }</td>
                <td className="text-center">{ elementLevel }</td>
                <td>
                    <button type="button" className="btn btn-warning"onClick={() => this.handleEdit(item)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(item.id)} >Delete</button>
                </td>
            </tr>                                   
        );
    }
}

export default Item;



  