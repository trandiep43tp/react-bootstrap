import React, { Component} from 'react';

class Item extends Component{
    render(){
        let item=this.props.item;   //lấy dữ liệu từ component list
        //console.log(item);
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
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>                                   
        );
    }
}

export default Item;



  