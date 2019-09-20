import React, { Component } from 'react'
import Item from './components/Item'
import axios from 'axios'
class Xiaojiejie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '踩背',
            list: []
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
                <div>router test</div>
                
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
}
export default Xiaojiejie