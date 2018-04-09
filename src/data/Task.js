//cách lấy id ngẫu nhiên
/*
    cài đặt uuid. vào trang web đánh npm uuid để tìm hiểu thêm 

 */
const uuidv4 = require('uuid/v4');
let item=[
    {
        id: uuidv4(),
        name: "Công việc 1",
        level: 0  //0 small, 1 medium, 2 Hight
     },
     {
        id: uuidv4(),
        name: "Công việc 2",
        level: 1  //0 small, 1 medium, 2 Hight
     },
     {
        id: uuidv4(),
        name: "Công việc 3",
        level: 2  //0 small, 1 medium, 2 Hight
     },
     {
        id: uuidv4(),
        name: "Công việc 3",
        level: 2  //0 small, 1 medium, 2 Hight
     }
];

export default item;