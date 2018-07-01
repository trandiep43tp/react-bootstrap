import * as types   from './../constants/actionType';
const initialState = false;
   
const isShowForm = (states = initialState, action) =>{
    switch(action.type){
        case types.TOGGLE_STATUS:
            states = !states;
            return states;
        case types.CLOSE_FORM: 
            states = false;
            return states;
        case types.OPEN_FORM:
            states = true;
            return states;
        case types.TOGGLE_FORM: 
            states = !states;
            return states;        
        default:
            return states;
    }   
}

export default isShowForm;