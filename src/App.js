import React,{Component} from 'react'
import Nav from './page/index'
class App extends Component{
    render(){
        return (
            <div>
                <div>hello Yangzixi</div>
                <div>{false?'这是对的':'这是不对的'}</div>
                <Nav />
            </div>
        )
    }
}
export default App