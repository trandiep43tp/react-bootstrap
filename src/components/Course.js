import React, { Component } from 'react';

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
        alert(this.props.tieude);
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
                            <button className="btn btn-success" onClick={this.click3}>Click 3</button>
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