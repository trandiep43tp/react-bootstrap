import {combineReducers } from 'redux';
import isShowForm         from './isShowForm';
import sort               from './sort'; 
import task               from './task';
import search             from './search';
import itemEdit           from './itemEdit';


const myReducer = combineReducers({
    isShowForm,
    sort,
    task,
    search,
    itemEdit
});
export default myReducer;