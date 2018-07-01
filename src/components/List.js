import React, { Component} from 'react';
import Item                from './Item';
import { connect }         from 'react-redux';
import _ from 'lodash';    //import như thế nầy là import toàn bộ


class List extends Component{
    
    render(){        
        let   { itemOrigin, search }       = this.props;
        let { by, value }                  = this.props.sort;
        let items = null;
       
        //Search
        if(search.length >0){
            items= _.filter(itemOrigin, (item)=>  {
                return _.includes(item.name.toLowerCase(), search.toLowerCase());
              });
        }else{
            items= itemOrigin;
        }

        //sort
        items = _.orderBy(items,[by],[value]);   //sử dụng lodash  
        

        const element_item =items.map((element,index) =>{
            return (
                < Item 
                    key   = {index } 
                    item  = {element}                     
                    
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

const mapStatetoProps = state =>{
    //console.log(state);
    return {
        itemOrigin  : state.task,
        search      : state.search,
        sort        : state.sort
    }
}

export default connect(mapStatetoProps, null) (List);



  