import * as types   from './../constants/actionType';

const initialState ={
        by   : 'name',
        value: 'asc'  //1 tăng, -1 giảm
    }

const sort = (states = initialState, action) =>{
    switch(action.type){
        case types.SORT: 
            var { by, value } = action.sort;              
            return { by , value}   

        default :  return states;
    }    
}

export default sort;