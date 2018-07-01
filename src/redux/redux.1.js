import { createStore } from 'redux';

// state ban đầu
var initialState ={
    status: false,
    sort  :{
        by   : 'name',
        value: 1  //1 tăng, -1 giảm
    }
}
var myReducer = (states = initialState, action) =>{
    //console.log(action)
    if(action.type ==="TOGGLE_STATUS"){
        states.status = !states.status;
        return states;        
    }

    if(action.type ==="SORT"){
       var { by, value } = action.sort;
       var { status } = states; 
       return {
           status : status,
           sort   : {
               by  : by,
               value: value
           }
       }
        /*
        // làm như này thì sẽ thay đổi luôn cả state ban đầu
        states.sort = {
            by   : action.sort.by,
            value: action.sort.value
        };     
        */   
    }

    return states; 
}
const store = createStore(myReducer);
console.log('default: ', store.getState());

//thực hiện công việc thay đổi status, không có tham số
var statusAction ={ type: "TOGGLE_STATUS"}
store.dispatch(statusAction);
console.log('chage_status: ',store.getState());

//thay đổi sort, có tham số truyền
var sortAction = {
    type : "SORT",
    sort: {
        by   : 'level',
        value: -1
    }
}

store.dispatch(sortAction);
console.log('change_sort: ', store.getState())
