import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {BrowserRouter} from 'react-router-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer  from "./Service/Reducer/index";

const store=createStore(rootReducer)
console.log('store', store)
ReactDOM.render(
  <>
  <Provider store={store}>
  <App />
  </Provider>
  </>,
  document.getElementById('root')
);

