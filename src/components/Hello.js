import React, { Component } from 'react';
import './Hello.css';
import Course from './Course';

class Hello extends Component {
    render(){
        //tạo một mảng các khóa học, mỗi phần tử là một đối tượng
        const items=[
            {
                name: 'React',
                time: '30h',
                free: true,
                desc: 'React js is very simple'
            },
            {
                name: 'Angular 4x',
                time: '50h',
                free: false,
                desc: 'Angular 4x js is very simple'
            },
            {
                name: React,
                time: '30h',
                free: true                
            }
        ];
        items.map((el,key) => console.log(el));

        //tạo ra một elemnt để hứng khi duyệt
        const elementCourse=items.map((element,index) =>
            <Course key={index} tieude="12345" >12344 </Course>
        );

        return(
            <div className="row">               
                 {elementCourse}               
            </div>
        );
        
    }
}

export default Hello;