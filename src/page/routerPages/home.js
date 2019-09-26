import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Item from '../components/Item'
import Page2 from './page2'
import axios from 'axios'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'
const  type={
    1:function(){this.testIf(1)},
    2:function(){ this.testIf(2)},
    3:function(){this.testIf(3)}
}
class allList extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
            inputValue: '列表1',
            list: [],
            obj:{
                name:'',
                age:'',
                state:'异常'
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={this.inputChange.bind(this)} value={this.state.inputValue} />
                    <button onClick={this.addItem.bind(this)}>点击增加</button></div>
                <ul>
                    {this.state.list.map((item, i) => {
                        return <Item txt={item} itemIndex={i} key={i} delItem={this.delItems.bind(this)}></Item>
                    })}
                </ul>
                <Page2 txt="这是父组件传递的" itemIndex={1} delItem={this.delItems.bind(this)}/>
                <Link to={{pathname:"/Page1/9"}}>About</Link>
                <div onClick={() => this.props.history.push({pathname:"/Page1/" + 9})}>router test to page1</div>
                
            </div>
        )
    }

    inputChange(e) {
        // this.state.inputValue=e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }
    addItem() {
        this.state.list.push(this.state.inputValue)
        this.setState({
            list: this.state.list
        })
    }

   
    delItems(i) {
        type[i].call(this)
        let list = this.state.list
        list.splice(i, 1)
        this.setState({
            list: list
        })
        axios.post('https://easy-mock.com/mock/5c00952c494e234c090162a5/example/getList').then((res)=>{
            console.info(res)
        }).catch(()=>{
            console.log('错误处理')
        })
    }
    testIf(n){
        console.log(`这是第${n}行`)
    }
}
export default allList