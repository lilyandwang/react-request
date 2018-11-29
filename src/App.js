import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import Header from "./components/header";
import Banner from "./components/banner";


class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div>
          {/* <Header/> */}
          <Banner/>
        </div>
      </Provider>
    )
  }
} 
export default App;