import React, { Component } from 'react'
import CDUN from "./CDUN";

 class Toggle extends Component {
   
     constructor(){
         super();
         this.state={
             show:true
         }
     }
    
  render() {
      const test=()=>{
           alert('Click me');
      } 
    return (
      <div>
      {
          this.state.show ?
            <CDUN />
          :null
      }
      <button onClick={()=>{this.setState({show:!this.state.show})}}>Click me</button><br/>
      <button onClick={test}>test</button>

        
      </div>
    )
  }
}
export default Toggle;