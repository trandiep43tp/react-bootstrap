import * as types   from './../constants/actionType';
const initialState = '';
   
const search = (states = initialState, action) =>{
    switch(action.type){
        case types.CHANGE_SEARCH:            
            return action.search;  
        case types.CLEAR:
            return '';      
        default:
            return states;
    }   
}

export default search;