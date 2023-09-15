import React from 'react';
import './App.css';


class classtest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mya : "Harsh"
        };
    }

    changeContent(){
        this.setState({
            mya:"Ramwani"
        });
    }

    render(){
        return(
            <div>
                Value is {this.state.mya}
                <button onClick={this.changeContent.bind(this)}>Click Me</button>
            </div>
        );
    }

}

export default classtest;