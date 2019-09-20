import React, { Component } from 'react'; //imrc
import {Link } from "react-router-dom";
class Home extends Component { //cc
    constructor(prop) {
        super(prop)
        this.state = {
            text: '',
            v: '旧值-'
        }
    }
  
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.txt === this.props.txt) {
            return false
        } else {
            return true
        }
    }

    render() {
        return (
            <div>
                <div>这是Home组件</div>
                <div onClick={() => this.props.history.push('Page1')}>跳转到page1</div>
                <Link to="/Page1">跳转到page1</Link>
            </div>
        );
    }
}


export default Home;