import React, { Component }  from 'react';

class LifeCyce extends Component{
    constructor(props){
        super(props);
        this.state={title: "LifeCycle"}
        console.log(this.state.title);
    }
    
    componentWillMount(){
        this.setState({ title: this.state.title + "1"});
        console.log(this.state.title);
        //console.log("componentWillMount");
    }
    componentDidMount(){
        this.setState({ title: this.state.title + "2"});
        console.log(this.state.title);
        //console.log("componentDidMount");
    }

    render(){
        console.log(this.state.title);
        return <h3>LifeCyce</h3>
        
    }
}

export default LifeCyce;