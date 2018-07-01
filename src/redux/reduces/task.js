import * as types   from './../constants/actionType';
import * as config  from './../constants/config';
//import item         from './../../data/Task';
import _            from 'lodash';

const uuidv4 = require('uuid/v4');     //tự động tạo id lên mạng tìm hiểu

let initialState = [];          

let items = JSON.parse(localStorage.getItem(config.ITEM_FROM_LOCAL_STORAGE));

initialState = (items !== null && items.length >0) ? items : initialState;

const task = (states = initialState, action) =>{  
    let id = null;  
    switch(action.type){
        case types.LIST_ALL: 
            return states;   
        case types.DELETE_ITEM:
            //thực hiện xóa item
             id = action.id;
            _.remove(states, (item)=>{
                     return item.id===id
            });
            localStorage.setItem(config.ITEM_FROM_LOCAL_STORAGE, JSON.stringify(states));
            return [...states];  
        
        case types.SUBMIT_FORM:
            let item = action.item;           
            if(item.id ===''){          
                id = uuidv4();
            }else{
               states =  _.reject(states,{ id: item.id})     // loại bỏ đối tượng có id = item.id ra khoi item
                id= item.id;
            }          
                    
            states.push({
                id   : id,
                name : item.taskName,
                level: parseInt(item.taskLevel,0)
            })
            localStorage.setItem(config.ITEM_FROM_LOCAL_STORAGE, JSON.stringify(states));
            return [...states];  
           
        default :  return states;
    }
}

export default task;