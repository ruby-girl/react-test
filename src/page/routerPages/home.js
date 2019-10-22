import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Item from '../components/Item'
import Three from './three'
import axios from 'axios'
const type = {
    0: function () { this.testIf(0) },
    1: function () { this.testIf(1) },
    2: function () { this.testIf(2) }
}
class allList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            list: [],
            obj: {
                name: '',
                age: '',
                state: '异常'
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
                <Three txt="这是父组件传递给子组件" itemIndex={1} delItem={this.delItems.bind(this)} />
                <Link to={{ pathname: "/three/9" }}>测试路由参数传递方式 Link router test to three</Link>
                <div onClick={() => this.props.history.push({ pathname: "/three/" + 9 })}>测试路由参数传递方式router test to three</div>
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
            list: this.state.list,
            inputValue:''
        })
    }
    delItems(i) {
        type[i].call(this)
        let list = this.state.list
        list.splice(i, 1)
        this.setState({
            list: list
        })
        axios.post('https://easy-mock.com/mock/5c00952c494e234c090162a5/example/getList').then((res) => {
            console.info(res)
        }).catch(() => {
            console.log('错误处理')
        })
    }
    testIf(n) {
        console.log(`这是第${n + 1}行`)
    }
}
export default allList