import React, { Component } from 'react'; //imrc

class Item1  extends Component { //cc
   constructor(prop){
      super(prop)
      this.state={
         text:'',
         v:'旧值-'
      }
   }

   componentDidMount(){
      console.log(this.props.match.params.num)
   }

    render() { 
        return ( 
           <div>
            <div>这里是Page1 content</div>
           
            </div>
         );
    }
}

export default Item1;