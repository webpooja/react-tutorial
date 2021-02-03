import React, { Component } from 'react';
import './App.css';
import HomeContainer from "./Container/HomeContainer";


class App extends Component {
   render() {
      return (
         <div className = "App">
           <HomeContainer/>
         </div>
      );
   }
}
export default App;