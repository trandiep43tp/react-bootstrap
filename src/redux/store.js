import { createStore } from 'redux';
import  myReducer  from './reduces/index';   //myReducer là 1 function

const store = createStore(myReducer);

//console.log('default: ', store.getState());
//thực hiện công việc thay đổi status, không có tham số
//store.dispatch(status());  //status là 1 func được định nghĩa bên actions
//console.log('chage_status: ',store.getState());
//store.dispatch( sort({by: 'level',value: -1 }));
//console.log('change_sort: ', store.getState())



export default store;