import React, { Component } from 'react';

class Course extends Component {
    constructor(props){
        super(props);
        this.state={tonghocvien: 10};
    }

    
    render(){
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
                        <div className="panel panel-footer"  style={{visibility: this.props.free? "":"hidden"}} >
                            <button className="btn btn-primary">Xem</button>
                        </div>
                    </div>      
                </div>
            </div>        
        );
        
    }
}

export default Course;