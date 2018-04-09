import React, { Component } from 'react';

import $ from 'jquery';   //dùng lệnh npm install jquery trước

class Course extends Component {
    constructor(props){
        super(props);
        this.state={ tonghocvien: 10 };
        this.click3= this.click3.bind(this);
        this.click4=this.click4.bind(this);
    }
    click1(){
        alert(1234);
    }
    click2(val){
        alert(val);
    }

    click3(){
        //alert("sử dụng jquery");
        $("h3.panel-title").css('font-weight','bold');
        $("p").css('font-weight','bold');
    }

    
    click4(){
        alert(this.refs.username.value);
    }

    render(){
        let elementShow=null;
        if(this.props.free){
            elementShow=<div className="panel panel-footer"   >
                            <button className="btn btn-primary" onClick={this.click1}>Click 1</button>
                            <button className="btn btn-danger" onClick={() => this.click2("Click2")}>Click 2</button>
                            <button className="btn btn-success" id="button" onClick={this.click3}>Use JQuery</button>
                        </div>;
        }else{
            elementShow=<div className="input-group" >
                            <input type="text" className="form-control" placeholder="username" ref="username"/>
                            <span className="input-group-btn">
                            <button className="btn btn-info" type="button" onClick={this.click4} >Button</button>
                            </span>                            
                        </div>;
        }
        return(            
            <div className="col col-sm-6 col-md-4">
                <div className="panel panel-danger">
                    <div className="panel panel-heading">
                        <h3 className="panel-title">{ this.props.tieude }  -  { this.props.time}</h3>
                    </div>
                    <div className="panel panel-body" >
                        <p>{this.props.children}</p>
                        <p>{this.props.free}</p>
                        <ul className="list-group">
                            <li className="list-group-item">{this.state.tonghocvien}</li>
                            <li className="list-group-item">Bài2</li>
                            <li className="list-group-item">Bài3</li>
                        </ul>
                        {elementShow}                        
                    </div>      
                </div>
            </div>        
        );
        
    }
}

export default Course;