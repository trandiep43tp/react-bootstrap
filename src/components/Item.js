import React, { Component} from 'react';
import { connect } from 'react-redux';
import { open_form, actDeleteItem, actItemEdit } from './../redux/actions/action';

class Item extends Component{
    constructor(props){
        super(props);

        this.handleDelete  = this.handleDelete.bind(this);
        this.handleEdit    = this.handleEdit.bind(this);
    }

    handleDelete(id){
        this.props.itemDelete(id);
    }

    handleEdit(item){
       this.props.itemEdit(item)
    }

    render(){
        //console.log(this.props)
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


const mapDispatchtoProps = ( dispatch, ownProps) =>{    
    return {
       itemEdit: (item) =>{          
          dispatch(open_form());
          dispatch(actItemEdit(item));
        },
        itemDelete: (id) =>{
            dispatch(actDeleteItem(id))
        }
    }
}

export default connect(null, mapDispatchtoProps) (Item);




  