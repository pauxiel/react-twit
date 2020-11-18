import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

//Redux applications have a single store. We have to pass the Root Reducer to our createStore() function in order for 
//the store to know what pieces of state it should have. The point of creating a store is to allow components to be 
//able to access it without having to pass the data down through multiple components.

ReactDOM.render( 
      <Provider store = {store}> 
         <App /> 
         </Provider>, 
         document.getElementById('root'))