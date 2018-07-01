import * as types from './../constants/actionType';

const initialState ={
    id       : '',
    name     :   '',
    level    :   0
};

const itemEdit = (states = initialState, action) =>{
    switch(action.type){
        case types.EDIT_ITEM:       
            return action.item            
        case types.SUBMIT_FORM:
            return states
        case types.UNSELECT_ITEM:
            return initialState;
        default :  return states;
    }    
}

export default itemEdit;