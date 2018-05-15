import React, { Component } from 'react';

class Search extends Component {
   constructor(props){
        super(props);
        this.state={
            strSearch: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);

   }

    handleSearch(){
        //console.log(123);
        this.props.onClickSearch(this.state.strSearch);
    }

    

    handleChange(event){
        this.setState({
            strSearch: event.target.value
        });
    }
    
    handleClear(){        
        this.setState({
            strSearch: ''
        })
        this.props.onclickClear();
    }

    render(){
        return (            
            <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="input-group">
                    <input
                        type="text"
                        value={this.state.strSearch} 
                        onChange={this.handleChange}
                        className="form-control" 
                        placeholder="Search for...."
                    />
                    <span className="input-group-btn">
                    <button className="btn btn-success" onClick={this.handleSearch}  type="button">Go</button>
                    <button className="btn btn-warning" onClick={this.handleClear}  type="button">Clear</button>
                    </span>
                </div>
            </div>                             
        )
    }
}

export default Search;