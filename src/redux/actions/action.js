
import * as types from './../constants/actionType';

export const status = () =>{
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (sort) =>{
    return {
        type: types.SORT,
        sort: sort
    }
}

export const toggle_form = () =>{
    return {
        type: types.TOGGLE_FORM
    }
}

export const close_form = () =>{
    return {
        type: types.CLOSE_FORM
    }
}

export const open_form = () =>{
    return {
        type: types.OPEN_FORM,
    }
}


export const submitForm = (item) =>{
    return {
        type: types.SUBMIT_FORM,
        item
    }
}

export const search = (search) =>{
    return {
        type: types.CHANGE_SEARCH,
        search
    }
}

export const clear = () =>{

    return {
        type: types.CLEAR
    }
}

export const actDeleteItem = (id) =>{

    return {
        type: types.DELETE_ITEM,
        id
    }
}

export const actItemEdit = (item) =>{
    return {
        type: types.EDIT_ITEM,
        item        
    }
}

export const actUnSelectEdit = () =>{
    return {
        type: types.UNSELECT_ITEM 
    }
}

