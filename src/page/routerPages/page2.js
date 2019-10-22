import React, { Component } from 'react'; //imrc
import PropTypes from 'prop-types'
class Page2  extends Component { //cc
   constructor(prop){
      super(prop)
      this.state={
         text:''
      }
   }
   // 需要更新的组件--生命周期函数--如果将要更新的组件的值没有变化，将不进行更新，优化优化
   shouldComponentUpdate(nextProps,nextState){
      if(nextProps.txt === this.props.txt){         
         return false
      }else{    
         return true
      }
   }

    render() { 
        return ( 
           <div>
            <div onClick={this.itemClick.bind(this,this.props.itemIndex)}>{this.props.txt}----page2</div>
            <div>{this.state.text}</div>
            </div>
         );
    }
    itemClick(i){
   //    this.setState((state,props)=>({
   //       text:state.v+props.txt
   //   }))
       this.props.delItem(i)
    }
}

Page2.propTypes={
    txt:PropTypes.string,
    itemIndex:PropTypes.number,
    delItem:PropTypes.func
 }

export default Page2;