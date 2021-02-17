import React, { Component } from 'react';
import './App.css';
import HomeContainer from "./Container/HomeContainer";
import HeaderContainer from "./Container/HeaderContainer";

   
class App extends Component {
   render() {
      return (
         <div className = "App">
         <HeaderContainer />
         
    
           <HomeContainer/><br/>
         
         
         </div>
      );
   }
}
export default App;